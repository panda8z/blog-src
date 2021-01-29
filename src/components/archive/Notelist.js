import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



const NoteList = () => {


  const data = useStaticQuery(
    graphql`
            {
              noteList: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}, type: {eq: "note"}}}, sort: {order: ASC, fields: frontmatter___date}) {
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
  const noteList = data.noteList.nodes

  return noteList.map((note, i, list) => {
    return (<r-cell class="post" span="2" key={i.toString()}>
      <h3>
        <a href={'/'+note.frontmatter.slug || note.fields.slog} className="post-excerpt">{'📃'+note.frontmatter.title}</a>
      </h3>
      <span className="excerpt">{note.excerpt}</span>
      <br />
      <time>{note.frontmatter.date}</time>
    </r-cell>)
  })
}

export default NoteList