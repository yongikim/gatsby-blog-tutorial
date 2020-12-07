import React, { useState, useEffect, useRef } from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import classNames from 'classnames'
import { rhythm } from "../utils/typography"
import Styles from "./layout.module.css"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const [fixedOnTop, setFixedOnTop] = useState(false)
  const ref = useRef(null)

  function onScroll() {
    const scrollY = window.scrollY

    if (scrollY >= ref.current.clientHeight && !fixedOnTop) {
      setFixedOnTop(true)
    } else if (scrollY < ref.current.clientHeight && fixedOnTop){
      setFixedOnTop(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const navbarClassName = classNames(Styles.navbar, { [Styles.navbarFixed]: fixedOnTop })

  return (
    <div>
      <nav className={navbarClassName} ref={ref}>
        <Link to={`/`}>
          <h3 className={Styles.navbarTitle}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link to={`/about/`} className={Styles.navbarItem}>
          About
        </Link>
        <Link to={`/about/`} className={Styles.navbarItem}>
          About
        </Link>
        <Link to={`/about/`} className={Styles.navbarItem}>
          About
        </Link>
        <Link to={`/about/`} className={Styles.navbarItem}>
          About
        </Link>
        <Link to={`/about/`} className={Styles.navbarItem}>
          About
        </Link>
      </nav>
      {children}
    </div>
  )
}
