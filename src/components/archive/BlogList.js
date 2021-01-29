import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



const BlogList = () => {


  const data = useStaticQuery(
    graphql`
            {
              blogList: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}, type: {eq: "blog"}}}, sort: {order: ASC, fields: frontmatter___date}) {
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
  const blogList = data.blogList.nodes

  return blogList.map((post, i, list) => {
    return (<r-cell class="post" span="2" key={i.toString()}>
      <h3>
        <a href={'/'+post.frontmatter.slug || post.fields.slog} className="post-excerpt">{'📃'+post.frontmatter.title}</a>
      </h3>
      <span className="excerpt">{post.excerpt}</span>
      <br />
      <time>{post.frontmatter.date}</time>
    </r-cell>)
  })
}

export default BlogList