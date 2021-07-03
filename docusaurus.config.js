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
        // {to: 'blog', label: '文章', position: 'right'},
        {
          label: '分类',
          position: 'right',
          items: [
            {
              label: '杂谈',
              to: 'docs/杂谈/前言'
            },
            {
              label: '博客建设',
              to: 'docs/博客建设/awesome-mdx'
            },
            {
              label: 'CSS',
              to: 'docs/CSS/CSS-demo'
            },
            {
              label: 'JS',
              to: 'docs/JS/dom-drag'
            },
            {
              label: 'React',
              to: 'docs/React/toy react-like-1'
            },
            {
              label: 'ThreeJS',
              to: 'docs/ThreeJS/panoramic with threejs'
            },
            {
              label: '前端杂项',
              to: 'docs/前端杂项/csrf attack'
            },
            // {
            //   label: '计算机基础',
            //   to: 'docs/计算机基础/type of programmig language'
            // },
          ],
        },
        {
          label: '文摘',
          position: 'right',
          to: 'abstracts/'
        },
        {
          label: '乱七八糟',
          position: 'right',
          items: [
            {
              label: '全景图',
              to: 'panoramic/'
            },
            {
              label: '鸡汤/doge',
              href: 'http://www.cxyxiaowu.com/soup.html'
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
              label: '关于我👀',
              to: 'docs/about/about'
            },
            {
              label: '邮箱📮',
              href: 'mailto:yleavesw@gmail.com'
            },
            {
              label: 'github',
              href: 'https://github.com/yleave'
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/qq_38701868'
            },
            {
              label: '旧版',
              href: 'https://yleave.github.io/'
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
              to: 'docs/杂谈/前言',
            },
          ],
        },
        {
          title: '待填充🙉',
          items: [
            {
              label: '肉体',
              href: 'https://yleave.top/a',
            },
            {
              label: '灵魂',
              href: 'https://yleave.top/b',
            },
            {
              label: '总有一个该在路上',
              href: 'https://yleave.top/c',
            },
          ],
        },
        {
          title: '友链',
          items: [
            {
              label: '坑位1',
              href: 'https://yleave.top/d',
            },
            {
              label: '坑位2',
              href: 'https://yleave.top/e',
            },
            {
              label: '坑位3',
              href: 'https://yleave.top/f',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} | yle blog.
        <p><span id="busuanzi_container_site_uv">本站总访问量：<span id="busuanzi_value_site_uv"><i class="fa fa-spinner fa-spin"></i></span>次</span></p>
        <p><a href="http://beian.miit.gov.cn/">闽ICP备2021004814号-1<a></p>
        `,
    },
    gtag: {
      trackingID: 'G-B66H1HYDXT',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    googleAnalytics: {
      trackingID: 'G-B66H1HYDXT',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  // plugins: [ 安装了 calssic 就不用再安装这两个插件了
  //   ['@docusaurus/plugin-google-gtag'],
  //   ['@docusaurus/plugin-google-analytics'], 
  // ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        translations: {
          "search_placeholder": "Search",
          "see_all_results": "查看所有相关结果👀",
          "no_results": "抱歉，暂时没有这方面的文章😣.",
          "search_results_for": "关于 \"{{ keyword }}\" 的所有文章",
          "search_the_documentation": "从当前站点中查找关键字",
          "count_documents_found": "一共找到了 {{ count }} 篇相关文章👀",
          "count_documents_found_plural": "一共找到了 {{ count }} 篇相关文章👀",
          "no_documents_were_found": "啥也没找到，换一个关键词吧😵"
        },
      },
    ],
  ],
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
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
    {
      src: 'https://cdn.bootcdn.net/ajax/libs/node-waves/0.7.6/waves.min.js',
      async: true,
    }
  ],
  stylesheets: [
    '//at.alicdn.com/t/font_2138234_yvmrwvxy5d.css',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'https://unpkg.com/gitalk/dist/gitalk.css',
    'https://cdn.bootcdn.net/ajax/libs/node-waves/0.7.6/waves.min.css'
  ],
};
