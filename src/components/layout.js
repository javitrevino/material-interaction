import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import './layout.css'

import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
         allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description', content:
                data.site.siteMetadata.description
            },
            {
              name: 'keywords', content:
                data.site.siteMetadata.keywords
            }
          ]}

        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {children}

          <Footer data={data}>
            Creado en React por © Interaction
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
