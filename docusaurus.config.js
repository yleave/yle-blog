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
    hideableSidebar: true,
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
        // {
        //   to: 'timeline',
        //   label: '时间线',
        //   position: 'right',
        // },
        {
          label: '关于',
          position: 'right',
          items: [
            {
              label: '关于我',
              to: 'docs/about/about'
            },
            {
              label: 'github',
              href: 'https://github.com/yleave'
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/qq_38701868'
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '待填充🙈',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: '待填充🙉',
          items: [
            {
              label: '肉体',
              href: 'https://yleave.top/',
            },
            {
              label: '灵魂',
              href: 'https://yleave.top/',
            },
            {
              label: '总有一个该在路上',
              href: 'https://yleave.top/',
            },
          ],
        },
        {
          title: '友链',
          items: [
            {
              label: '坑位1',
              href: 'https://yleave.top/',
            },
            {
              label: '坑位2',
              href: 'https://yleave.top/',
            },
            {
              label: '坑位3',
              href: 'https://yleave.top/',
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
