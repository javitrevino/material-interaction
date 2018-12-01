import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ColoredHeader from '../components/ColoredHeader'
import './layout.css'
import Footer from '../components/Footer'
import icon32 from '../images/interaction_favicon.png'
import opengraph from '../images/interaction_opengraph.png'


/* eslint-disable */



const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQueryAlt {
        site {
          siteMetadata {
            title
            description
            keywords
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
                        },
                        {
                            property: 'og:image', content: `${opengraph}`
                        },
                        {
                            name: 'google-site-verification', content: 'SEngJ_JiEvHgHy-V6ZMLbG2kaH-EfKQxJGoQ7WJBICo'
                        }
                    ]}
                    link={[
                        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
                    ]}
                >
                    <html lang="es" />
                </Helmet>
                <ColoredHeader />
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
