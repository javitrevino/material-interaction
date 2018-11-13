module.exports = {
  siteMetadata: {
    title: 'Interaction',
    description: 'Interaction es una empresa de Monterrey, Nuevo León que ayuda a los startups y empresas de software a diseñar y prototipar sus apps en alta fidelidad. Nos enfocamos en prototipos móviles para apps de iOS, Android ó React. Nuestro servicio es único en México, ya que nuestro enfoque es exclusivamente en entregar lo mejor en UI/UX, y prototipos de alta fidelidad realizados en herramientas modernas como Sketch, Origami Studio y Framer X.Podemos generar las especificaciones para ser utilizadas de referencia por tus desarrolladores.',
    keywords: 'prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        space: 'v02i0eq7jigg',
        accessToken: '93868da459019911804ccffca88856ead99fad529c08f75181c4f6d1c7443d30',

      },
    }
  ],
}