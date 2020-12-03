import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Styles from "./index.module.css"

export default ({ data }) => (
  <Layout>
    <h1
      css={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}
    >
      Amazing Pandas Eating Things
    </h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)}
          `}
        >
          <Link
            to={node.fields.slug}
            className={Styles.postListTitle}
          >
            {node.frontmatter.title}{" "}
          </Link>
          <span
            css={css`
              color: #bbb
            `}
          >
            - {node.frontmatter.date}
          </span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
