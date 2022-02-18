const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GSoC projects at FOSSology',
  tagline: 'Updates about activites done by Google Summer of Code students at FOSSology.',
  url: 'https://fossology.github.io',
  baseUrl: '/gsoc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
              href: 'https://www.youtube.com/channel/UCZGPJnQZVnEPQWxOuNamLpw',
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
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
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
