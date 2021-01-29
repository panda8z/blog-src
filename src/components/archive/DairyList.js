import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



const DairyList = () => {


  const data = useStaticQuery(
    graphql`
            {
              dairyList: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}, type: {eq: "dairy"}}}, sort: {order: ASC, fields: frontmatter___date}) {
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
  const dairyList = data.dairyList.nodes

  return dairyList.map((dairy, i, list) => {
    return (<r-cell class="post" span="2" key={i.toString()}>
      <h3>
        <a href={'/'+dairy.frontmatter.slug || dairy.fields.slog} className="post-excerpt">{'📃'+dairy.frontmatter.title}</a>
      </h3>
      <span className="excerpt">{dairy.excerpt}</span>
      <br />
      <time>{dairy.frontmatter.date}</time>
    </r-cell>)
  })
}

export default DairyList