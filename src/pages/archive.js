import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Archive extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'archive';
  }

  render() {
    return (
      <div>
        <r-grid class="main" columns="6" columns-s="4" columns-xs="2">

          <r-cell order="-10" span="4" span-s="2">
            <h1>Archive</h1>
          </r-cell>

          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div class="">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>
          <p>Comming soon...</p>

          {/* <hr class="section"></hr>
            <r-cell class="year" span="row">
              <h2 id="2017"><a href="#2017">2017</a></h2>
            </r-cell>
            <r-cell class="post" span="2">
              <h3>
                <a href="/wasm-intro" class="post-excerpt">Introduction to WebAssembly</a>
              </h3>
              <span class="excerpt">
                WebAssembly is a new technology for running portable programs in a safe and efficient manner, repre…
              </span>
              <time datetime="">
                Jan 16
              </time>
            </r-cell> */}
        </r-grid>
      </div>
    )
  }
}
