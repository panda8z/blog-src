import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Work extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'work';
  }

  render() {
    return (
      <div>
        <r-grid class="main" columns="6" columns-s="4" columns-xs="2">

          <r-cell order="-10" span="4" span-s="2">
            <h1>Professional highlights</h1>
          </r-cell>

          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div class="focus3">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>

          <r-cell span="row" flow-cols="3" flow-cols-s="2" flow-cols-xs="1" class="intro">
            <p>Comming soon...</p>
          </r-cell>

          <r-cell id="contrib-list" span="row" class="contrib-list">
            <h2>
              <a href="#contrib-list">Notable work and contributions</a>
            </h2>
            <p>Comming soon...</p>
          </r-cell>


        </r-grid>
      </div>
    )
  }
}
