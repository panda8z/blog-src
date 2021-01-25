import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteKeywords = data.site.siteMetadata.keywords
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPageUrl = Number(currentPage - 1) === 1 ? '/' : '/' + Number(currentPage - 1).toString()
    const nextPageUrl = '/' + Number(currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} keywords={siteKeywords} />
        <Bio />
        <ol style={{ listStyle: `none` }}>
          {posts.map(({ node }) => {
            console.log(node)
            const url = '/' + (node.frontmatter.slug || node.fields.slug)
            return (
              <li key={url}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article">
                  <header>
                    <h2>
                      <Link to={url} itemProp="url">
                        <span itemProp="headline">{node.frontmatter.title}</span>
                      </Link>
                    </h2>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </article>
              </li>
            )
          })}
        </ol>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            height: '1rem',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPageUrl} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: "0.5rem",
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPageUrl} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout >
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`