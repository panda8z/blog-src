import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../styles/index.css'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'home';
  }
  render() {
    return (
      <div>
        <r-grid class="main" span="6" span-s="4" span-xs="2">
          <r-cell order="-10" span="4" span-s="2">
            <h1>Hello I`m Panda张向北</h1>
          </r-cell>
          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div class="focus0">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/photos/">Photography</a>
              <a href="https://shop.rsms.me/">Shop</a>
            </div>
          </r-cell>
          <r-cell></r-cell>
        </r-grid>
      </div>
    )
  }
}