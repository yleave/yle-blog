/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yle',
  tagline: '人生苦短，至少该让咖啡☕甜点~',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://gitee.com/ylea/imagehost/raw/master/img/logo1.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yle',
      logo: {
        alt: 'Yle',
        src: 'img/zzm3.jpg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'right',
        // },
        {to: 'blog', label: '文章', position: 'right'},
        {
          label: '分类',
          position: 'right',
          items: [
            {
              label: '杂谈',
              to: 'docs'
            },
          ],
        },
        {
          to: 'timeline',
          label: '时间线',
          position: 'right',
        },
        {
          to: 'about',
          label: '关于',
          position: 'right',
        },
        // {
        //   label: "学习",
        //   position: "right",
        //   items: [
        //     {
        //       label: "B 站配套文本",
        //       to: "docs/videos/videos-intro",
        //     },
        //     {
        //       label: "CSS 教程",
        //       to: "docs/css/box-model/box-model",
        //     },
        //     {
        //       label: "资源导航",
        //       // position: "right",
        //       to: "docs/resources/resources-intro",
        //     },
        //   ],
        // },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '等等🙈',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: '这里🙉',
          items: [
            {
              label: 'CSDN',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'GitHub',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'WeChat',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '还是空的！🙊',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: "近期文章",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
