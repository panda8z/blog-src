import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



const ArticleList = () => {


  const data = useStaticQuery(
    graphql`
            {
              articleList: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}, type: {eq: "article"}}}, sort: {order: ASC, fields: frontmatter___date}) {
                nodes {
                  excerpt
                  frontmatter {
                    title
                    slug
                    date(formatString: "MMMM YYYY")
                  }
                  fields {
                    slug
                  }
                }
                totalCount
              }
            }
            `
  )
  console.log(data)
  const articleList = data.articleList.nodes

  return articleList.map((article, i, list) => {
    return (<r-cell class="post" span="2" key={i.toString()}>
      <h3>
        <a href={'/'+article.frontmatter.slug || article.fields.slog} className="post-excerpt">{'📜'+article.frontmatter.title}</a>
      </h3>
      <span className="excerpt">{article.excerpt}</span>
      <br />
      <time>{article.frontmatter.date}</time>
    </r-cell>)
  })
}

export default ArticleList