import { Link } from 'gatsby'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      projectList: []
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
            <h1>Hello <br />
              I`m Panda张向北</h1>
          </r-cell>
          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div class="focus0">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>

          {/* projectList */}
          <r-cell span="2">
            <h2 class="margin-b-4">
              <a href="/projects/">Projects</a>
            </h2>
            {this.state.projectList.map((proj, i, list) => {
              return (<div>
                <h3><a href={proj.url}>{proj.name}</a></h3>
                <p>{proj.excerpt}</p>
              </div>)
            })}
            <h3>
              <a href="/projects/" class="dimmed">{`See all ${this.state.projectList.length} projects →`}</a>
            </h3>
          </r-cell>
          {/* blog articles */}
          <r-cell order-s="-1" order-xs="-1" span="2">
            <h2 class="margin-b-4">
              <a href="/archive/">{'Thoughts & ideas'}</a>
            </h2>
            {this.state.articles.map((post, i, list) => {
              return (
                <div>
                  <h3>
                    <a href={post.url} class="post-excerpt">{post.title}</a>
                  </h3>

                  <p>
                    {post.excerpt}
                    <time datetime="">{'Jan 2017' + post.date}</time>
                  </p>
                </div>
              )
            })}


            <h3>
              <a href="/archive/" class="dimmed">{`Browse all ${this.state.articles.length} articles →`}</a>
            </h3>
          </r-cell>
          {/* self Intro */}
          <r-cell class="intro" order-s="-2" order-xs="-2" span="2" span-s="3" span-xs="row">
            <p>{'I’m a Chinese he/him living in ShenZhen, China. Software is the medium through which I express myself.'}</p>
            <div class="quick-links">
              <Link to="/list-1">Recent Articles</Link>
            </div>
          </r-cell>
        </r-grid>
      </div>
    )
  }
}