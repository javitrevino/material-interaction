import React from "react"
import ColoredLayout from "../components/ColoredLayout";
import '../components/Blog.scss'
import { graphql } from 'gatsby'


const ArticlePost = ({ node }) => {
  return (
    <a href={node.slug}>
      <div className="blogPost">
        <img alt="Blog" src={node.image.file.url}></img>
        <h1 >{node.title}</h1>
        <p className="Excerpt">{node.content.childMarkdownRemark.excerpt}</p>
        <div>
          <p className="Author">INTERACTION</p>
          <p className="Date">{node.date}</p>
        </div>
      </div>
    </a>


  )
}


const BlogPage = ({ data }) => (
  <ColoredLayout>
    <div className="BlogWelcome">
      <h1>El Blog de Interaction </h1>
      <p>
        El blog de Interaction está dedicado a analizar temáticas relacionadas al diseño de software.
        Es una central especializada en crear contenido interesante para el publico mexicano de la industria del software
        en tópicos como el diseño UI, diseño UX, los prototipos, la animación de interfaces, herramientas de diseño, código relacionado a diseño
         y otros temas relevantes para diseñadores, desarrolladores y gente de negocios de la industria del software, las apps y
         la tecnología en México.
            </p>
    </div>
    <div className="blogGroup">
      {data.allContentfulBlog.edges.map((edge) => <ArticlePost node={edge.node} />)}

    </div>


  </ColoredLayout>

);

export default BlogPage;

export const pageQuery = graphql`
  query articlesQuery {
    allContentfulBlog (
      filter: { node_locale: { eq: "en-US"}}, 
      sort: { fields: [date], order: DESC}
    ){
      edges {
        node{
          title
          slug 
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          image{
            file {
              url
            }
          }
        date(formatString: "YYYY/DD/MM ")
        }
      }
    }
  }
`