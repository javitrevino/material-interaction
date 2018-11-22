import React from "react";
import Layout from "../components/layout";
import Gif from "../components/Gif";
import Cell from "../components/Cell";
import styled from "styled-components";
import staticdata from "../../staticdata.json";
import Wave from "../components/Wave";
import "../components/Services.css";
import Fab from "../components/Fab";
import posed from "react-pose";
import Card from '../components/Card'

/* eslint-disable */

const BlogPost = ({ node }) => {
  return (
    <li>
      <a href={node.slug}>{node.title}</a>
      <img src={node.image.file.url}></img>
      <div> {node.content.childMarkdownRemark.excerpt}</div>
    </li>
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
        <h1 className="HeroTitle">Diseñamos Apps</h1>
        <p className="HeroParagraph">
          Interaction asiste a las empresas de software en el diseño de
          pantallas, prototipos y developer handoff para ayudarles a crear apps
          increíbles. Nuestro propio método llamado Diseño Universal combina lo
          mejor del Diseño UI/UX y el Design Thinking para crear algo más
          efectivo.
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
            <BenefitTitle>Enfoque Moderno</BenefitTitle>
            <BenefitSubTitle>Estética, Funcionalidad y Emoción</BenefitSubTitle>
            <BenefitsParagraph>
              Nuestro workflow basado en vectores con apps como Sketch permite
              diseñar muchos wireframes para explorar todas las posibilidades en
              poco tiempo y después basado en las conclusiones crear diseños
              visuales refinados con perfección por píxel que lucen como una app
              terminada.
            </BenefitsParagraph>
          </div>
        </Benefit>
      </BenefitsArea>
      <BenefitsAreaReversed>
        <div>
          <BenefitTitle>Visión Clara</BenefitTitle>
          <BenefitSubTitle> Diseña antes de desarrollar </BenefitSubTitle>
          <BenefitsParagraph>
            Interaction te da la habilidad de tomar los diseños UI y darles vida.
            Puedes elegir desde algo simple pero poderoso como un prototipo
            online en Invision, o algo más ambicioso como animaciones o
            prototipos avanzados. El objetivo es que puedas envisionar en
            grande, presentar tu proyecto a tu equipo o socios y tener claridad
            en la dirección que lleva tu proyecto.
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
            <BenefitTitle>Microinteractions</BenefitTitle>
            <BenefitSubTitle> Interfaces mágicas</BenefitSubTitle>
            <BenefitsParagraph>
              Llamamos interfaces mágicas a aquellas que tiene una sublime
              animación que deleita a los usuarios. Por medio de herramientas
              como Flinto y Principle se pueden diseñar Gifs y videos animados
              que muestran las transiciones de tu app de forma dinámica. En
              prototipos de Framer X, se pueden usar librerías como Popmotion.
            </BenefitsParagraph>
          </div>
        </Benefit>
      </BenefitsArea>
      <BenefitsAreaReversed>
        <div>
          <BenefitTitle>Dev Friendly</BenefitTitle>
          <BenefitSubTitle>Especificaciones de desarrollo</BenefitSubTitle>
          <BenefitsParagraph>
            Interaction diseña dentro los límites de las plataformas de
            tecnología, nuestro trabajo es fácil de trasladar a código.
            Entregamos un developer handoff, es decir por medio de apps como
            Invision Inspect entregamos todos los detalles importantes para ser
            usados por desarrolladores para implementar el diseño
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


    </InteractionSection>
    <Fab />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (filter: {
      node_locale: { eq: "en-US"}
    }){
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
        }
      }
    }
  }
`