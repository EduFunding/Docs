import { themes as prismThemes } from 'prism-react-renderer';
import { Config } from '@docusaurus/types';
import classic from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EduFunding',
  tagline: 'Power their Education',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com', // TODO: replace with actual URL
  baseUrl: '/',

  organizationName: 'EduFunding', // GitHub org/user name
  projectName: 'EduFunding',      // GitHub repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.ts'),
         // editUrl: 'https://github.com/EduFunding/Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl: 'https://github.com/EduFunding/Docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EduFunding',
        logo: {
          alt: 'EduFunding Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/EduFunding/Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // Fill these with real links or remove them
              // { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/edufunding' },
              // { label: 'Discord', href: 'https://discord.gg/yourdiscord' },
              // { label: 'X', href: 'https://x.com/yourhandle' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/EduFunding/Docs' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EduFunding, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
