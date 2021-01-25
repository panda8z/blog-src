import React from "react"
import { Link } from "gatsby"
// import './raster2/raster2-react.js'
// import '../styles/rsms-css/less.js'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer style={{
        color: '#222222'
      }}>
        © {new Date().getFullYear()}, All rights reserved panda8z.
        {` `}
        Built by <a href="https://blog.panda8z.com" target="_blank" rel="noreferrer" >Panda8z</a> 。
      </footer>
    </div>
  )
}

export default Layout
