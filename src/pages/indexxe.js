import React from "react";
import Layout from "../components/layout";
import Gif from "../components/Gif";
import Cell from "../components/Cell";
import styled from "styled-components";
import staticdata from "../../staticdata.json";
import Wave from "../components/Wave";
import "../components/Services.css";
import Fab from "../components/Fab";
import '../components/Blog.scss'
import { graphql } from 'gatsby'


/* eslint-disable */

const BlogPost = ({ node }) => {
  return (
    <a href={node.slug}>
      <div className="blogPost">
        <img alt="Blog Image" src={node.image.file.url}></img>
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

const BtnGroup = styled.div`
display: grid;
grid-template-columns: 280px 280px;
grid-gap: 1px;
padding: 40px;
justify-content: center;
@media (max-width: 576px) {
  display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    align-content: centr;
    justify-items: center;

}
}
    
}
`;

const MainBtn = styled.a`
  cursor: pointer;
  background: linear-gradient(125deg, #015fdf, #1ed2fc);
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 97px;
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
  text-transform: uppercase;
  color: white;
  display: block;
  width: 250px;
  height: 64px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 576px) {
    font-size: 18px !important;
    margin: 32px 0px !important;
  }
`;
const ActionContainer = styled.div`
display: grid;
justify-content: center;
padding-top: 100px
padding-bottom: 100px
`;
const MainBtnNoBorder = styled.a`
  @media (max-width: 576px) {
    font-size: 18px !important;
  }
  text-align: center;
  cursor: pointer;
  background: linear-gradient(125deg, #015fdf, #1ed2fc);
  border: 0px;
  border-radius: 97px;
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
  text-transform: uppercase;
  color: white;
  display: block;
  width: 250px;
  height: 64px;
  text-align: center;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
`;

const SideBtn = styled.a`
  @media (max-width: 576px) {
    font-size: 18px !important;
  }
  cursor: pointer;

  background: rgba(0, 0, 0, 0.75);
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 97px;
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
  text-transform: uppercase;
  color: white;
  display: block;
  width: 250px;
  height: 64px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
`;

const InteractionSection = styled.section`
  margin-bottom: 140px;
`;

const BenefitsArea = styled.section` 
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 64px;
  margin:64px;
  padding: 64px;
  align-content: center;

    @media (max-width: 576px){
    grid-template-columns: 1fr;
    grid-gap: 0px;
  margin: 0px;
    justify-content: center;
    }
}

/* ----------- iPad 3, 4 and Pro 9.7" Portrait ----------- */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {
        grid-template-columns: 1fr;

}

}

 `;
const BenefitsAreaReversed = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-gap: 64px;
  margin: 64px;
  padding: 64px;
  align-content: center;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0px;
    display: flex;
    flex-direction: column-reverse;
  }

  /* ----------- iPad 3, 4 and Pro 9.7" Portrait ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Benefit = styled.div`
  display: grid;
  align-content: center;
`;

const BenefitTitle = styled.h2`
  color: #333333;
  font-family: "Poppins", serif;
  font-size: 56px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 33px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 40px;
  }
`;
const BenefitSubTitle = styled.h3`
  color: #333333;
  font-family: "Poppins", serif;
  font-size: 26px;
  font-weight: 200;
  text-align: center;
  margin: 0;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 19px;
  }
`;

const BenefitsParagraph = styled.p`
  margin: 24px 0px 24px 0px;
  text-align: center;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 25px;
  color: #595959;

  @media (max-width: 576px) {
    font-size: 18px;
  }

  /* Portrait  and Landscape 9.7 iPad Pro and older iPads */

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 20px;
  }

  /* Landscape 9.7 iPad Pro and older iPads */

  /* Portrait 12.9 iPad Pro */
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 22px;
  }
`;



const GifWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

const SectionCaption = styled.h1`
  font-weight: 200;
  font-size: 32px;
  color: #717e90;

  text-align: center;
  margin-bottom: 90px;

  @media (max-width: 640px) {
    font-size: 21px;
  }
`;

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SpecialBtn = styled.a`
  text-align: center;
  cursor: pointer;
  background: linear-gradient(
    125deg,
    rgba(45, 55, 105, 1),
    rgba(234, 80, 108, 1)
  );
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 97px;
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
  text-transform: uppercase;
  color: white;
  display: block;
  width: 250px;
  height: 64px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
`;
const IndexPage = ({ data }) => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="HeroTitle">Prototipos de software</h1>
        <p className="HeroParagraph">
          Interaction es la primera empresa de prototipos de software en México.
           Ayudamos a las empresas a definir su
            visión, ahorrar recursos y a diseñar apps grandiosas. Nuestro propio método llamado <a class="UniversalAnchor" href="/universal">Diseño Universal</a> combina lo
mejor del Diseño UI/UX y el Design Thinking.
        </p>
        <BtnGroup>
          <MainBtn href="/portfolio/">Ver Portfolio</MainBtn>
          <SideBtn href="/servicios/"> Conocer Más</SideBtn>
        </BtnGroup>
      </div>
      <Wave />
    </div>

    <InteractionSection>
      <BenefitsArea>

        <GifWrapper>
          <Gif image="https://dl.dropboxusercontent.com/s/ocg1wtid1ejwzdp/cards_UI.gif?dl=0" />
        </GifWrapper>
        <Benefit>
          <div>
            <BenefitTitle>Interfaces Modernas</BenefitTitle>
            <BenefitSubTitle>Belleza Estética y Funcionalidad</BenefitSubTitle>
            <BenefitsParagraph>
              Nuestro workflow basado en vectores con apps como Sketch permite
              diseñar pantallas de alta calidad  y explorar las posibilidades creativas de tu producto. Sketch nos permite diseñar UIs que lucen como una app

              terminada e integrar esos diseños con apps de prototipos.


            </BenefitsParagraph>
          </div>
        </Benefit>
      </BenefitsArea>
      <BenefitsAreaReversed>
        <div>
          <BenefitTitle>Visión Clara</BenefitTitle>
          <BenefitSubTitle> Prototipa antes de desarrollar </BenefitSubTitle>
          <BenefitsParagraph>
            Interaction te da la habilidad de tomar los diseños UI de Sketch y darles vida.
            Puedes elegir desde algo simple como un prototipo
            online en Invision, o algo más ambicioso como animaciones de Principle o
            prototipos avanzados de React. El objetivo es que puedas envisionar en
            grande, presentar tu proyecto a tu equipo o socios y tener claridad
            en la dirección que lleva tu proyecto mientras ahorras recursos.
          </BenefitsParagraph>
        </div>
        <GifWrapper>
          <Gif image="https://dl.dropboxusercontent.com/s/hvyrxibcer8gb5k/ux_collaboration.png?dl=0" />
        </GifWrapper>
      </BenefitsAreaReversed>
      <BenefitsArea>
        <GifWrapper>
          <Gif image="https://dl.dropboxusercontent.com/s/iebsuhkfv8n4zji/microinteractions.gif?dl=0" />
        </GifWrapper>
        <Benefit>
          <div>
            <BenefitTitle>Interfaces mágicas</BenefitTitle>
            <BenefitSubTitle>Prototipos Animados Precisos</BenefitSubTitle>
            <BenefitsParagraph>
              Interaction tiene un enfoque fuerte en la animación de UIs para apps.
              Consideramos que la animación es más que un adorno, es una parte importante del UX.
              Desde microinteractions hechas en Principle hasta Prototipos de iOS en Flinto, Interaction
              te ayudará a crear prototipos pixel perfect al nivel de Dribbble.
            </BenefitsParagraph>
          </div>
        </Benefit>
      </BenefitsArea>
      <BenefitsAreaReversed>
        <div>
          <BenefitTitle>Dev Friendly</BenefitTitle>
          <BenefitSubTitle>Code Meets Design</BenefitSubTitle>
          <BenefitsParagraph>
            En Interaction somos verdaderos diseñadores de productos de tecnología. Es por eso que nuestro proceso siempre
            tiene una fase de entrega de specs para desarrollo (developer handoff). Esto puede tomar varias formas como el uso de apps como Zeplin e Invision Inspect o bien el uso de componentes reales de React en Framer X.
          </BenefitsParagraph>
        </div>
        <GifWrapper>
          <Gif image="https://dl.dropboxusercontent.com/s/38tywyg2stb7zxz/developer_specs.png?dl=0" />
        </GifWrapper>
      </BenefitsAreaReversed>
      <ActionContainer>
        <MainBtnNoBorder href="/servicios">Conocer Más</MainBtnNoBorder>
      </ActionContainer>
    </InteractionSection>
    <InteractionSection>
      <SectionCaption>Herramientas de diseño</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
      <ActionContainer>
        <SpecialBtn href="/cotiza">Cotiza Hoy</SpecialBtn>
      </ActionContainer>

      <section className="blogArea">
        <SectionCaption>Blog de Interaction</SectionCaption>
        <div className="blogGroup">

          {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
        </div>

      </section>

    </InteractionSection >
    <Fab />
  </Layout >
);

export default IndexPage;
/*

Query de GraphQL para Beneficios. Esta muy dificil de hacer ahorita debido a los componentes a la reversa.
Se tendra que editar desde el codigo de Gatsby por ahora para optimiza el tiempo.
{
  allContentfulBenefit {
    edges {
      node {

        benefitImage {
          file {
            url

          }
        }
       benefitTitle
        benefitSubtitle
      	benefitBody {
      	  childMarkdownRemark {
              html
            }
      	}




      }
    }
  }
}

*/


export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (
      filter: { node_locale: { eq: "en-US"}}, 
      sort: { fields: [date], order: DESC},
      limit: 3
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