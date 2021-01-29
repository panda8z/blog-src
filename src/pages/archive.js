import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ArticleList from '../components/archive/ArticleList';
import BlogList from '../components/archive/BlogList';
import DairyList from '../components/archive/DairyList';
import NoteList from '../components/archive/Notelist';
import SEO from '../components/SEO';
const tabBtnStyle = {
  marginRight: "20px",
  fontFamily: 'Inter var',
  fontSize: '1.2rem',
  fontWeight: '400',
  padding: '10px',
  borderRadius: '5px',
  minWidth: '48px',
  border: 'none'
}
export default class Archive extends Component {

  constructor(props) {
    super(props)

    this.state = {
      checkedBtn: [1, 0, 0, 0]
    }
  }

  handleTabBtnClick(d) {
    console.log(d, d.currentTarget.getAttribute('index'))
    let num = Number(d.currentTarget.getAttribute('index'))
    switch (num) {
      case 1:
        this.setState({ checkedBtn: [1, 0, 0, 0] })
        break;
      case 2:
        this.setState({ checkedBtn: [0, 1, 0, 0] })
        break;
      case 3:
        this.setState({ checkedBtn: [0, 0, 1, 0] })
        break;
      case 4:
        this.setState({ checkedBtn: [0, 0, 0, 1] })
        break;

      default:
        break;
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'archive';
  }

  render() {
    return (
      <div>
        <SEO title={"Archive"}></SEO>
        <r-grid class="main" columns="6" columns-s="4" columns-xs="2">

          <r-cell order="-10" span="4" span-s="2">
            <h1>Archive</h1>
          </r-cell>

          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div className="menu">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>
          <r-cell
            order="-8" span="6" span-s="6" >
            <hr></hr>
          </r-cell>
          <r-cell
            order="-7" span="6" span-s="4"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {/* blog list */}
            <button type="button" className='tabBtn' style={tabBtnStyle} index={1} onClick={this.handleTabBtnClick.bind(this)} onKeyDown={this.handleTabBtnClick.bind(this)}><span style={{ color: this.state.checkedBtn[0] === 1 ? '#000' : 'rgba(0,0,0,0.3)' }}>{"文章"}</span>{"📜"}</button>
            {/* article list */}
            <button type="button" className='tabBtn' style={tabBtnStyle} index={2} onClick={this.handleTabBtnClick.bind(this)} onKeyDown={this.handleTabBtnClick.bind(this)}><span style={{ color: this.state.checkedBtn[1] === 1 ? '#000' : 'rgba(0,0,0,0.3)' }}>{"博文"}</span>{"📃"}</button>
            {/* dairy list */}
            <button type="button" className='tabBtn' style={tabBtnStyle} index={3} onClick={this.handleTabBtnClick.bind(this)} onKeyDown={this.handleTabBtnClick.bind(this)}><span style={{ color: this.state.checkedBtn[2] === 1 ? '#000' : 'rgba(0,0,0,0.3)' }}>{"日记"}</span>{"🗓"}</button>
            {/* note list */}
            <button type="button" className='tabBtn' style={tabBtnStyle} index={4} onClick={this.handleTabBtnClick.bind(this)} onKeyDown={this.handleTabBtnClick.bind(this)}><span style={{ color: this.state.checkedBtn[3] === 1 ? '#000' : 'rgba(0,0,0,0.3)' }}>{"笔记"}</span>{'📝'}</button>
          </r-cell>

          {this.state.checkedBtn[0] === 1 ? <ArticleList /> : null}
          {this.state.checkedBtn[1] === 1 ? <BlogList /> : null}
          {this.state.checkedBtn[2] === 1 ? <DairyList/> : null}
          {this.state.checkedBtn[3] === 1 ? <NoteList/> : null}
        </r-grid>
      </div >
    )
  }
}
