module.exports = {
  siteMetadata: {
    title: 'Javier Treviño',
    description: 'Interaction asiste a las empresas de software en el diseño UI/UX, y prototipos interactivos para ayudarles a crear apps increíbles. Nuestro propio método llamado Diseño Universal combina lo mejor del Diseño UI/UX y el Design Thinking para crear algo más efectivo.',
    keywords: 'prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico'
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