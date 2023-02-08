// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spout',
  tagline: '学习｜记录｜分享',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://spout.space',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fuji233', // Usually your GitHub org/user name.
  projectName: 'spout', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fuji233/spout/tree/main/',
        },
        blog: {
          blogSidebarTitle: '帖子',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fuji233/spout/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'projects',
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
          'https://github.com/fuji233/spout/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Spout',
        logo: {
          alt: '学习｜记录｜分享',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'right',
            label: '笔记',
          },
          {to: '/projects/project-spout', label: '项目', position: 'right'},
          {to: '/blog/hello-world', label: '博客', position: 'right'},
          {
            href: 'https://github.com/fuji233/spout',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: '项目',
            items: [
              {
                label: 'Spout',
                to: '/projects/project-spout',
              },
              {
                label: '浮记',
                to: '/projects/project-fee',
              },
            ],
          },
          {
            title: '博客',
            items: [
              {
                label: 'Hello World',
                to: '/blog/hello-world',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fuji233',
              },
              {
                label: '稀土掘金',
                href: 'https://juejin.cn/user/3153822040725464',
              },
            ],
          },
        ],
        // logo: {
        //   alt: 'Spout',
        //   src: 'img/logo.svg',
        //   href: 'https://github.com/fuji233/spout',
        // },
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} · fuji233`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
