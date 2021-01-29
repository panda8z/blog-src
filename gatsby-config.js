module.exports = {
  siteMetadata: {
    title: "Panda8z`s Blog",
    author: {
      name: `Panda8z`,
      summary: `who lives and works in ShenZhen building useful things.`,
    },
    description: "Panda8z`s Blog.",
    siteUrl: `https://blog.panda8z.com/`,
    social: {
      twitter: `Panda8z`,
    },
  },
  plugins: [
    // 支持 sass
    "gatsby-plugin-sass",
    //  支持 google analytics
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-7CNX4G3XVT",
      },
    },
    // TODO
    "gatsby-plugin-sharp",
    // TODO
    "gatsby-transformer-sharp",
    // TODO
    "gatsby-plugin-feed",
    // 支持 meta data 自定义
    "gatsby-plugin-react-helmet",
    // 支持 自动 sitemap 生成
    "gatsby-plugin-sitemap",
    // 支持 google 渐进式WebApplication + 离线功能
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
    // 渐进式WebApp的清单设置插件
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Panda8z`s Blog",
        short_name: `Panda8z`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/content/images/icon.svg`,
      },
    },
    // 支持 使用mdx想markdown里添加components
    "gatsby-plugin-mdx",
    // 配置文件读取：images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
      __key: "images",
    },
    // 配置文件读取：assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
      __key: "assets",
    },
    // 配置文件读取：blog
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
      __key: "blog",
    },
    // 配置文件读取：article
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "article",
        path: `${__dirname}/content/article`,
      },
      __key: "article",
    },
    // 配置文件读取：pages
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    // markdown 转换插件
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // markdown 图片插件
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          // markdown 支持 iframe 插件
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // markdown 代码高亮插件
          `gatsby-remark-prismjs`,
          // TODO
          `gatsby-remark-copy-linked-files`,
          // TODO
          `gatsby-remark-smartypants`,
        ],
      },
    },
  ],
};
