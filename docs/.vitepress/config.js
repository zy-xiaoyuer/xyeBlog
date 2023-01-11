
  // export default {
  module.exports = {
    title: '小芋儿', //站点标题
    description: '不会敲代码的程序🙈',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
      siteTitle: "小芋儿",
      logo: "assets/xb.png",
    // 导航栏
    nav: [
        { text: "首页", link: "/" },
        { text: "前端-笔记 📖",link:'views/articles/frontEnd/'},
       { text:'友情链接 🔗',link:'views/friendLinks'}
      ],
    //   社交链接
      socialLinks: [
        { icon: "github", link: "https://github.com/zy-xiaoyuer" },
        {
        icon: {
          svg: '<svg t="1673419019091" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2711" width="200" height="200"><path d="M853.333333 170.666667H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v512c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V256c0-46.933333-38.4-85.333333-85.333334-85.333333z m0 170.666666l-341.333333 213.333334-341.333333-213.333334V256l341.333333 213.333333 341.333333-213.333333v85.333333z" p-id="2712"></path></svg>'
        },
        link: 'mailto:1457057616@qq.com'
      }
      ],
    //   侧边栏
    sidebar: {
      // 折叠侧边栏
        "views/articles/frontEnd": [
          {
            text: "前端学习笔记",
            // 可折侧边栏
            collapsible: true, 
            // collapsed:true, //默认，是否展开
            items: [
              {
                text: "HTML",
                link: "views/articles/frontEnd/html",
              },
              {
                text: "CSS",
                link: "views/articles/frontEnd/css",
              },
              {
                text: "JavaScript",
                link: "views/articles/frontEnd/javascript",
              },
              {
                text: "Vue",
                link: "views/articles/frontEnd/vue",
              },
              {
                text: "React",
                link: "views/articles/frontEnd/react",
              },
              {
                text: "杂七杂八",
                link: "views/articles/frontEnd/other",
              },
            ],
          }]
      },
    },
  };