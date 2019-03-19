module.exports = {
  siteMetadata: {
    title: 'Javier Treviño',
    description: 'Javier es un diseñador de productos que trabaja en la creación y mejora de UI/UX para software mobile y web'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        space: 'v02i0eq7jigg',
        accessToken: '93868da459019911804ccffca88856ead99fad529c08f75181c4f6d1c7443d30',
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TDXTLZG",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,


      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130166937-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional

      },

    }
  ],
}