# Nirjas Comment Classifier - Model Benchmark & Selection Report

**Task.** Nirjas extracts every comment from a source repository and labels each as
**license-related** or **not** (binary). Atarashi, a separate model, then decides *which*
license. This report benchmarks every modeling approach for the Nirjas binary classifier and
justifies the selection.

**Dataset.** `output/nirjas` (recreated 2026-06): train 58,103 / val 6,945 / test 6,950.
Label convention `0 = license_related`,
`1 = not`; remapped internally to `license = 1` so F1/AUC read normally. All numbers below are
on the held-out **test** split.

---

## TL;DR - the decision

> **Ship model2vec's trainable classifier on a bge-distilled base (`StaticModelForClassification`):
> 0.990 F1, 30 MB, ~13k samp/s on CPU, no GPU at inference, short-form recall 1.00.** It is
> **Pareto-optimal** (§3, Fig. 3) and the
> rational default for FOSSology-scale, CPU-first scanning. A fine-tuned `jhu-clsp/ettin-encoder-32m`
> (length-bucketed) is the **accuracy-critical fallback** - it buys ~0.8 balanced-accuracy points,
> entirely on the contextual code-comment class, at ~100–290× the CPU cost.
>
> Why model2vec-clf is the default, not the fine-tuned encoder: the benchmark is **saturated** (top
> models within ~1 F1 point), so the ~0.8-point edge a fine-tuned encoder buys does **not** justify
> ~290× the per-comment cost for bulk first-pass scanning - and a two-stage design (cheap filter →
> Ettin on the uncertain few) recovers that edge anyway. Only model2vec used as *static embeddings +
> a linear head* is weak (0.947); that distinction is the whole point of §3.
>
> Caveat that dominates everything: model choice is no longer the bottleneck - *data quality is*.
> The numbers pick a model; they do **not** prove the task is solved.

---

## 1. Methodology

Five families, all trained and evaluated on the identical recreated split
(`benchmark_nirjas.py` + `bench_model2vec_clf.py`):

| Family | What it is | Head |
|---|---|---|
| **lexical** | TF-IDF features (word 1–2gram / char_wb 3–5gram / both) | LogisticRegression |
| **frozen-embed** | a SentenceTransformer used as-is (no gradient) | LogisticRegression |
| **model2vec** | distill a teacher → *static* embeddings (frozen) | LogisticRegression |
| **model2vec-clf** | model2vec's own `StaticModelForClassification` - MLP head **+ on-task fine-tuning of the static vectors**, deployed via `to_pipeline()` (CPU/numpy) | trained jointly |
| **fine-tuned** | an encoder trained end-to-end (HF Trainer, 1 epoch) | classification head |

> **model2vec appears twice on purpose.** The proposal links model2vec's *classifier training*,
> so `model2vec-clf` is the faithful test of the proposed approach; `model2vec` (static + LR) is
> the naive baseline. They land in very different places - see §3.

**Metrics.** F1, ROC-AUC, accuracy, **balanced accuracy** (equal-class subset, since the split
is ~46/54), per-`negative_type` correct-rejection rate, and **short-form recall** (recall on the
287 held-out SPDX/one-line-reference test comments). Deployment axis: **CPU throughput** and
model size.

**Throughput protocol (identical for every model).** We time the *full* raw-text → label path
(tokenize/vectorize/encode **+** head/forward) on CPU - pinned to 8 threads, batch 64, 2 warmup
passes then the **median of 3 timed passes** over a fixed 320-comment sample; the run-to-run
[min, max] range is recorded alongside. fp32, eager PyTorch, **no ONNX/quantization** (so the
transformer numbers are a conservative floor). Config in `output/nirjas/benchmark_meta.json`.

**Reproducibility.** `benchmark_nirjas.py` → `output/nirjas/benchmark_results.json` (+ `_meta`);
`plot_benchmark.py` → `docs/figs/`. Seeds fixed (`set_seed(0)`, `random_state=0`); differences
< ~0.003 F1 are within run-to-run noise.

---

## 2. Results

CPU throughput = median samp/s on the full raw-text→label path (8 threads, batch 64); sizes are
fp32 (INT8 ONNX ≈ ¼). Sorted by balanced accuracy.

| model | family | F1 | bal-acc | AUC | gen-code-comment reject | hard-neg reject | short-form recall | CPU samp/s | size (MB, fp32) | params (M) |
|---|---|---|---|---|---|---|---|---|---|---|
| **Ettin-150m** | fine-tuned | 0.9990 | **0.9992** | 1.0000 | 1.000 | 1.000 | 1.00 | 22 | 598 | 150 |
| **ModernBERT-base** | fine-tuned | 0.9987 | 0.9990 | 1.0000 | 1.000 | 1.000 | 1.00 | 22 | 598 | 150 |
| Ettin-32m | fine-tuned | 0.9984 | 0.9989 | 1.0000 | 0.999 | 1.000 | 1.00 | 123 | 128 | 32 |
| Ettin-68m | fine-tuned | 0.9982 | 0.9985 | 1.0000 | 0.999 | 1.000 | 1.00 | 57 | 274 | 68 |
| Ettin-68m (INT8 ONNX) | fine-tuned | 0.9979 | 0.9984 | 1.0000 | 0.998 | 1.000 | 1.00 | 45 | 70 | 68 |
| Ettin-17m | fine-tuned | 0.9971 | 0.9976 | 1.0000 | 0.997 | 1.000 | 1.00 | 320 | 68 | 17 |
| distilbert (2019) | fine-tuned | 0.9964 | 0.9969 | 0.9999 | 0.997 | 1.000 | 1.00 | 72 | 268 | 67 |
| tfidf-char | lexical | 0.9934 | 0.9939 | 0.9996 | 0.996 | 1.000 | 1.00 | 3,791 | 0.8 | - |
| tfidf-word+char | lexical | 0.9911 | 0.9919 | 0.9995 | 0.994 | 0.998 | 1.00 | 2,987 | 1.2 | - |
| **model2vec-clf ← bge** ⭐ | model2vec-clf | 0.9895 | 0.9905 | 0.9991 | 0.991 | 0.998 | 1.00 | 12,949 | 30 | 8 |
| model2vec-clf (potion-32M) | model2vec-clf | 0.9876 | 0.9892 | 0.9993 | 0.985 | 0.999 | 1.00 | 13,091 | 129 | 32 |
| bge-base-en-v1.5 | frozen-embed | 0.9848 | 0.9861 | 0.9983 | 0.989 | 0.999 | 0.990 | 9 | 438 | 110 |
| tfidf-word | lexical | 0.9803 | 0.9819 | 0.9984 | 0.985 | 0.999 | 1.00 | 19,119 | 0.4 | - |
| MiniLM-L6 | frozen-embed | 0.9701 | 0.9737 | 0.9961 | 0.979 | 0.975 | 0.941 | 100 | 91 | 23 |
| **model2vec ← bge** | model2vec | **0.9465** | **0.9520** | 0.9885 | 0.960 | 0.957 | 0.948 | 4,118 | 30 | 8 |
