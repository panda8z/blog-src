import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SEO from '../components/seo';

export default class About extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).getRootNode().getElementsByTagName('html')[0].className = 'about';
  }

  render() {
    return (
      <div>
        <SEO></SEO>
        <r-grid class="main" columns="6" columns-s="4" columns-xs="2">

          <r-cell order="-10" span="4" span-s="2">
            <h1>Hej</h1>
          </r-cell>

          <r-cell order="-9" class="menu" span="2" span-s="2">
            <div class="focus1">
              <a href="/">●</a>
              <a href="/about/">About</a>
              <a href="/projects/">Projects</a>
              <a href="/work/">Work</a>
              <a href="/archive/">Archive</a>
            </div>
          </r-cell>

          <r-cell span="3" span-s="2" span-xs="row" class="intro">

            <p>
              My name is Rasmus Andersson. 
              I’m a Chinese he/him living in ShenZhen, China. 
              Software is the medium through which I express myself.
            </p>
            <p>
              You can call me a Designer or Developer if you want.
            </p>
            <p>In my spare time I enjoy tinkering with software 
              engineering projects, like building compilers and 
              designing programming languages that no one will ever use, ha ha. 
              Coding and tinkering with electronics is fun, too.<br />
              <a href="/projects/">List of projects →</a>
            </p>
          </r-cell>

          {/* bio */}
          <r-cell class="bio" order-xs="-1" span="5-6" span-s="3-4" span-xs="row">
            <img src="https://s3.ax1x.com/2021/01/27/sxT9zQ.jpg" alt="Portrait of me" />
            <p class="link-list">
              <a href="https://mp.weixin.qq.com/s/yBY1TPMX3D0ZtpvqbR-RqA">微信公众号 @panda8z</a>
              <a href="https://blog.csdn.net/panda_8">CSDN @panda_8</a>
              <a href="https://twitter.com/panda8z">Twitter @panda8z</a>
              <a href="https://github.com/panda8z">GitHub /panda8z</a>
              <a href="https://www.figma.com/@panda8z">Figma @panda8z</a>
              <a href="https://instagram.com/panda8xy/">Instagram @panda8xy</a>
              <a href="https://www.facebook.com/panda8z">Facebook @panda8z</a>
              <a href="mailto:panda8@126.com">Email panda8@126.com</a>
            </p>
          </r-cell>

          {/* tidbit */}
          <r-cell class="tidbit" span="2" span-xs="row">
            <h2 id="website"><a href="website">This website</a></h2>
            <p>
              This website is very simple, built primarily in HTML and Markdown.
              Preprocessed by Gatsby.
              It's hosted by Github and distributed globally by Cloudflare.
</p>
            <p>
              Colors on this website makes use of the wide P3 color space to produce rich, deep amazing color
              when viewed in a web browser that supports the
  <code>color(display-p3 R G B)</code> CSS function,
  like for example Safari, in combination with a wide-gamut display.
</p>
          </r-cell>

          <r-cell class="tidbit" span="4" span-xs="row">
            <h2 id="programming"><a href="programming">Programming</a></h2>
            <div flow-cols="2" flow-cols-s="1">
              <p>
                There are so many great programming languages. It would be hard to pick a favorite. Really, the craft of programming is 99% "the fuzzy parts"—concepts, data structures, best practices, people, culture and many other aspects that are agnostic to a particular programming language.
                </p>
              <p>
                For making things that need to reach a wide audience,
                something that spits out JavaScript or WebAssembly is a good idea,
                running on the web platform.
                The web may be carrying the weight an ocean of legacy, but it is without comparison
                the most well-distributed platform.
                </p>
              <p>
                Go is one of those languages where it took me years to see and truly understand its brilliance. 
                2021 I started to learn and use rust do some interesting things. 
                I've probably programmed real programs in 20 or so programming languages by now, 
                not to mention the countless languages 
                I've created as hobby projects or studied and 
                at the end of the day I think Go and Rust is the closes to 
                what I'd consider a "good" programming languages to be.
              </p>
            </div>
          </r-cell>
        </r-grid>
      </div>
    )
  }
}
