import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo';

export default class BlogIndex extends React.Component {

  constructor(props) {
    super(props)
    console.log('BlogIndex props = ', props)
    this.props = props
    this.state = {

    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteKeywords = data.site.siteMetadata.keywords
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPageUrl = '/list-' + Number(currentPage - 1).toString()
    const nextPageUrl = '/list-' + Number(currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} keywords={siteKeywords} />
        <Bio />
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
          {posts.map(({ node }) => {
            console.log(node)
            const url = '/' + (node.frontmatter.slug || node.fields.slug)
            return (
              <li key={url} >
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
        </ul>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyleType: 'none',
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
                to={`/list-${i + 1}`}
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


export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true}}}
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