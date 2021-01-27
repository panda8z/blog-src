import { graphql, Link } from 'gatsby'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.props = props
    console.log(props)
    this.state = {
      data: props.data,
      articles: props.data.indexPosts.nodes,
      articleTotal: props.data.total.totalCount,
      projectList: [],
      projectsTotal: 0
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'home';
  }

  render() {
    return (
      <div>
        <r-grid class="main" columns="6" columns-s="4" columns-xs="2">
          <r-cell order="-10" span="4" span-s="2">
            <h1>Hello，I`m Panda 张向北</h1>
          </r-cell>
          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div className="focus0">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>
          {/* projectList */}
          <r-cell span="2">
            <h2 className="margin-b-4">
              <a href="/projects/">Projects</a>
            </h2>
            {/* Index projectList */}
            {this.state.projectList.map((proj, i, list) => {
              return (<div key={i.toString}>
                <h3><a href={proj.frontmatter.slug || proj.fields.slug}>{proj.frontmatter.title}</a></h3>
                <p>{proj.excerpt}</p>
                <br></br>
                <p>{proj.frontmatter.date}</p>
              </div>)
            })}
            <h3>
              <a href="/projects/" className="dimmed">{`See all ${this.state.projectList.length} projects →`}</a>
            </h3>
          </r-cell>
          {/* Index posts list */}
          <r-cell order-s="-1" order-xs="-1" span="2">
            <h2 className="margin-b-4">
              <a href="/archive/">{'Thoughts & ideas'}</a>
            </h2>
            {this.state.articles.map((post, i, list) => {
              return (
                <div key={i.toString()}>
                  <h4 style={{ marginTop: `20px`, marginBottom: '10px' }}>
                    <a href={post.frontmatter.slug || post.fields.slug} className="post-excerpt">{post.frontmatter.title}</a>
                  </h4>
                  <p>
                    {post.excerpt}
                    <time dateTime="">{post.frontmatter.date}</time>
                  </p>
                </div>
              )
            })}


            <h3 style={{marginTop: '20px'}}>
              <a href="/archive/" className="dimmed">{`Browse all ${this.state.articles.length} articles →`}</a>
            </h3>
          </r-cell>
          {/* self Intro */}
          <r-cell class="intro" order-s="-2" order-xs="-2" span="2" span-s="3" span-xs="row">
            <p>{'I’m a Chinese he/him living in ShenZhen, China. Software is the medium through which I express myself.'}</p>
            <div className="quick-links">
              <Link to="/list-1">Recent Articles</Link>
            </div>
          </r-cell>
        </r-grid>
      </div >
    )
  }
}

export const pageQuery = graphql`
{
  indexPosts: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}, showInIndex: {eq: true}}}, sort: {order: ASC, fields: frontmatter___date}, limit: 5) {
    nodes {
      excerpt
      frontmatter {
        date(formatString: "MMMM YYYY")
        title
        slug
      }
      fields {
        slug
      }
    }
  }
  total: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    totalCount
  }
}
`