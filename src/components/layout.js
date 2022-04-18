/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
  color: #677CE2;
  text-decoration:none;
  
  &:hover {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  color: #677CE2;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <h6>
            © {new Date().getFullYear()}, Made with
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>.
            </h6>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
