
  export default {
    title: '小芋儿', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
      siteTitle: "小芋儿",
      logo: "/logo.png",
    // 侧边栏
    nav: [
        { text: "首页", link: "/" },
        { text: "学习笔记",  items: [
          { text: 'vue', link: 'views/articles/vue2' },
          { text: 'element', link: 'views/articles/element' },
          { text: 'md', link: 'views/articles/md' }
        ]
       },
      ],
    //   社交链接
      socialLinks: [
        { icon: "github", link: "https://gitee.com/geeksdidi" },
        { icon: "twitter", link: "..." }
      ],
    //   侧边栏
    sidebar: {
      // 折叠侧边栏
        "views/articles/": [
          {
            text: "vue教程",
            // 可折侧边栏
            collapsible: true,
            collapsed:true,
            items: [
              {
                text: "vue2",
                link: "views/articles/vue2",
              },
              {
                text: "vue3",
                link: "views/articles/vue3",
              },
            ],
          },
          {
            text: "element教程",
            // 可折侧边栏
            collapsible: true,
            collapsed:true,
            items: [
              {
                text: "element",
                link: "views/articles/element",
              },
            ],
          },
        ],
      },
    },
  };