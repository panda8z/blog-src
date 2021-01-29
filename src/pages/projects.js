import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SEO from '../components/seo';

export default class Projects extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'projects';
  }

  render() {
    return (
      <div>
        <SEO></SEO>
      <r-grid class="main" columns="6" columns-s="4" columns-xs="2">

        <r-cell order="-10" span="4" span-s="2">
          <h1>Passion projects and fun little experiments</h1>
        </r-cell>

        <r-cell order="-9" class="menu" span="2" span-s="2">
          <div class="focus2">
            <a href="/">●</a>
            <a href="/about/">About</a>
            <a href="/projects/">Projects</a>
            <a href="/work/">Work</a>
            <a href="/archive/">Archive</a>
          </div>
        </r-cell>

        {/* <!-- grid --> */}
        <r-cell class="project" span="2">
          <h3>Comming soon...</h3>
        </r-cell>
        
      </r-grid>
    </div>
    )
  }
}
