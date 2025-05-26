/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GSoC projects at FOSSology',
  tagline: 'Updates about activities done by Google Summer of Code students at FOSSology.',
  url: 'https://fossology.github.io',
  baseUrl: '/gsoc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'fossology',
  projectName: 'gsoc',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Contributor Guidelines',
          position: 'left',
          to: '/docs/guidelines/'
        },
        {
          label: '2021',
          position: 'left',
          to: '/docs/2021/',
          items: [
            {
              label: 'New build system',
              to: '/docs/2021/buildsystem/',
            },
            {
              label: 'Copyrights false positive detection',
              to: '/docs/2021/copyrights/',
            },
            {
              label: 'Microservice architecture',
              to: '/docs/2021/microservice/',
            },
            {
              label: 'Minerva',
              to: '/docs/2021/minerva/',
            },
            {
              label: 'ScanCode Integration',
              to: '/docs/2021/scancode/',
            },
            {
              label: 'React UI',
              to: '/docs/2021/ui/',
            },
          ]
        },
        {
          label: '2022',
          position: 'left',
          to: '/docs/2022/',
          items: [
            {
              label: 'Atarashi',
              to: '/docs/2022/atarashi/',
            },
            {
              label: 'Concept of project',
              to: '/docs/2022/project/',
            },
            {
              label: 'REUSE',
              to: '/docs/2022/reuse/',
            },
            {
              label: 'Spasht',
              to: '/docs/2022/spasht/',
            },
            {
              label: 'React UI',
              to: '/docs/2022/ui/',
            },
          ]
        },
        {
          label: '2023',
          position: 'left',
          to: '/docs/2023/',
          items: [
            {
              label: 'Reducing False positive copyrights',
              to: '/docs/2023/copyrights',
            },
            {
              label: 'REST API improvements',
              to: '/docs/2023/rest',
            },
            {
              label: 'License as a service',
              to: '/docs/2023/laas',
            },
            {
              label: 'Support CycloneDX report',
              to: '/docs/2023/cyclonedx',
            },
          ]
        },
        {
          label: '2024',
          position: 'left',
          to: '/docs/2024/',
          items: [
            {
              label: 'Idea list',
              to: '/docs/2024/GSoC-projects',
            },
            {
              label: 'Scheduler Overhaul',
              to: '/docs/2024/scheduler',
            },
            {
              label: 'AI Powered License Detection',
              to: '/docs/2024/license-detection',
            },
            {
              label: 'Support SPDX 3.0 Reports',
              to: '/docs/2024/spdx30',
            },
            {
              label: 'SPDX License Expression Support',
              to: '/docs/2024/spdx-expression',
            },
            {
              label: 'REST API improvements',
              to: '/docs/2024/rest',
            },
            {
              label: 'CI Scanner Improvements',
              to: '/docs/2024/ci-scanner',
            },
            {
              label: 'Data Pipeline',
              to: '/docs/2024/pipeline',
            },
            {
              label: 'Text Phrases',
              to: '/docs/2024/text-phrases',
            },
          ]
        },
        {
          label: '2025',
          position: 'left',
          to: '/docs/2025/',
          items: [
            {
              label: 'Idea list',
              to: '/docs/2025/GSoC-projects',
            },
            {
              label: 'Enhance Atarashi\'s Ability',
              to: '/docs/2025/atarashi-enhancement',
            },
            {
              label: 'Data Pipeline For Safaa',
              to: '/docs/2025/data-pipeline',
            },
            {
              label: 'Enhancing Debian Packaging for FOSSology',
              to: '/docs/2025/debian-packaging',
            },
            {
              label: 'LicenseDB Platform Improvements',
              to: '/docs/2025/licensedb-platform',
            },
            {
              label: 'Complete Microservices Infrastructure for FOSSology',
              to: '/docs/2025/microservices-infrastructure',
            },
            {
              label: 'Integrating OSS Review Toolkit with FOSSology',
              to: '/docs/2025/oss-review-toolkit',
            },
            {
              label: 'Reuse of clearing decisions using reports from OSSelot Project',
              to: '/docs/2025/osselot',
            },
            {
              label: 'Support text phrases and bulk based scanning for Monk a like agent',
              to: '/docs/2025/text-phrases-bulk',
            },
            {
              label: 'Completion of UI using React.js',
              to: '/docs/2025/ui-react',
            },
            {
              label: 'FOSSology UX and UI Redesign',
              to: '/docs/2025/ux-ui-design',
            },
          ]
        },
        {
          href: 'https://github.com/fossology/fossology',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fossology',
            },
            {
              label: 'Slack',
              href: 'https://fossology.slack.com/',
            },
            {
              label: 'Main home page',
              href: 'https://www.fossology.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@fossology',
            },
            {
              label: 'Installing FOSSology',
              href: 'https://github.com/fossology/fossology/wiki/Install-from-Source',
            },
            {
              label: 'Getting started',
              href: 'https://github.com/fossology/fossology/wiki/New-at-FOSSology,-You-Could-...',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} FOSSology project. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.png',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/fossology/gsoc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/fossology/gsoc/edit/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css')
          ],
        },
      },
    ],
  ],
};
