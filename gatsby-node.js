const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// 第一个被调用 自定义 schema 
exports.createSchemaCustomization = ({ actions }) => {
  // console.dir(actions)
  console.log("createSchemaCustomization 被调用了。。。")
  // {
  //   deletePage: [Function (anonymous)],
  //   createPage: [Function (anonymous)],
  //   deleteNode: [Function (anonymous)],
  //   deleteNodes: [Function (anonymous)],
  //   createNode: [Function (anonymous)],
  //   touchNode: [Function (anonymous)],
  //   createNodeField: [Function (anonymous)],
  //   createParentChildLink: [Function (anonymous)],
  //   setWebpackConfig: [Function (anonymous)],
  //   replaceWebpackConfig: [Function (anonymous)],
  //   setBabelOptions: [Function (anonymous)],
  //   setBabelPlugin: [Function (anonymous)],
  //   setBabelPreset: [Function (anonymous)],
  //   createJob: [Function (anonymous)],
  //   createJobV2: [Function (anonymous)],
  //   setJob: [Function (anonymous)],
  //   endJob: [Function (anonymous)],
  //   setPluginStatus: [Function (anonymous)],
  //   createRedirect: [Function (anonymous)],
  //   createPageDependency: [Function (anonymous)],
  //   setPageData: [Function (anonymous)],
  //   removePageData: [Function (anonymous)],
  //   createServerVisitedPage: [Function (anonymous)],
  //   createFieldExtension: [Function (anonymous)],
  //   createTypes: [Function (anonymous)],
  //   createResolverContext: [Function (anonymous)],
  //   addThirdPartySchema: [Function (anonymous)],
  //   printTypeDefinitions: [Function (anonymous)]
  // }
  const { createTypes } = actions

  // 明确定义siteMetadata {}对象
  // 这样一来，即使将其从gatsby-config.js中删除，也将始终对其进行定义
  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // 还明确定义 Markdown 的 frontmatter
  // 这样，即使没有博客文章存储在 “content/blog”中，
  // 用 “MarkdownRemark” 查询也将返回 “null”，而不是返回错误
  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      email: String
      zhihu: String
      douyin: String
      bili: String
      sina: String
      wechat: String
      github: String
      zcool: String
      dribbble: String
      youtube: String
      instagram: String
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}

// 第二个被调用 创建节点
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  console.log("onCreateNode 被调用了。。。", node.fileAbsolutePath)
  // 给 MarkdownRemark 节点 增加一个 slug 属性
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    // console.log('onCreateNode===', ' node: ', node, 'getNode: ', getNode, 'value:', value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// 第三个被调用
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  console.log("createPages 被调用了。。。")
  // 给博客博文定义模板
  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // 通过 GraphQL 获取所有 markdown文件的节点
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // 创建博文的页面
  // 但是，仅当在content/blog 文件夹至少又一个markdown文件时， 
  // context 变量作为 prop 在 GraphQL里才有效
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {

    // 创建博文页面
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      // 优先 frontmatter 里面的 slug 作为路径
      const path = post.frontmatter.slug || post.fields.slug
      createPage({
        path,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })



    })

    // 查询所有不是草稿的
    const withoutDraft = await graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: ASC, filter: {frontmatter: {draft: {ne: true}} }
            limit: 1000
          ) {
            nodes {
              id
            }
          }
        }
      `
    )
    const allPublishedPosts = withoutDraft.data.allMarkdownRemark.nodes
    // 创建博客列表页面
    const postsPerPage = 3
    const numPages = Math.ceil(allPublishedPosts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `/list-${i + 1}`, // 跟路径开始就是列表页
        component: path.resolve(`${__dirname}/src/templates/blog-list.js`),
        context: {
          limit: postsPerPage, // pageSize
          skip: i * postsPerPage, // steps
          numPages, // Numers of pages
          currentPage: i + 1, // pageNum 页码从1开始
        },
      })
    })

  }
}

