import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import "../components/Services.css";
import Fab from "../components/Fab";
import Wave from "../components/Wave";

/* eslint-disable */

const InteractionServicesSection = styled.section`
  display: grid;

  padding: 100px;
  border-bottom: 1px solid rgba(173, 173, 173, 0.3);

  @media only screen and (max-width: 640px) {
    padding: 0px;
  }
`;
const ExamplesText = styled.div`
  padding: 8px;
  margin-bottom: 88px;

  @media only screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
`;

const ServiceTitle = styled.h1`

color: black
font-family: "Poppins",sans-serif;
font-size: 56px;
font-weight: 500;
letter-spacing: 0px;
line-height: 1.2;
text-align: center;
margin-bottom: 24px;

@media only screen and (max-width: 640px) {
font-size:24px;
text-align: center;
margin: 40px;
}

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 40px;

}

`;

const ToolsLabel = styled.span`
  color: #777777;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: 32px;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const BenefitSubTitle = styled.h3`
  color: #333333;
  font-family: "Poppins", serif;
  font-size: 32px;
  font-weight: 200;
  text-align: center;
  margin: 0;
  margin: 0;
  margin-bottom: 72px;
  @media (max-width: 576px) {
    font-size: 19px;
  }
`;

const ToolsLogos = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 144px);
  margin-top: 21px;
  margin-bottom: 54px;
  justify-items: center;
  @media only screen and (max-width: 640px) {
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 8px;
    grid-template-columns: repeat(3, 104px);
  }
`;

const ExamplesGroup = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  @media only screen and (max-width: 640px) {
    display: none;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: 1fr;
    grid-gap: 104px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`;

const ExampleImg = styled.img`
  box-shadow: 3px 9px 88px -6px rgb(226, 226, 226);
  width: 500px;
  @media only screen and (max-width: 640px) {
    width: 350px;
  }
`;

const Caption = styled.p`
  color: #777777;
  font-family: "Roboto-Regular", "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`;

const GifsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
  justify-items: center;

  @media (max-width: 576px) {
    display: none;
  }
  /* Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (orientation: landscape) {
    display: none;
  }
`;

const Note = styled.p`
  font-size: 17px;
  font-family: "Poppins";
  margin: 64px;
`;

const ServicesPage = ({ data }) => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="HeroTitle">Prototipos de Sketch</h1>
        <p className="HeroParagraph">

          El servicio consiste en diseñar la faceta de UI/UX de tu app en Sketch y de ahí crear 1 o 2 prototipos según tu preferencia. Es con la finalidad de que seas mas exitoso en tu negocio de software, ya que tener un prototipo y diseños UI de tu app te ayudará a ser más productivo y hacer más felices a tus clientes.
        </p>
      </div>
      <Wave />
    </div>

    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle>Diseño de pantallas</ServiceTitle>
        <BenefitSubTitle>Diseño UI/UX en Sketch</BenefitSubTitle>

        <ToolsLabel>Herramientas relevantes</ToolsLabel>
        <ToolsLogos>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/lobyw70e1wpk8ao/logo-sketch.png?dl=0"
              width="56"
            />
            <p>Sketch</p>
          </div>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/z1in4yupql8rqo8/logo-figma.png?dl=0"
              width="56"
            />
            <p>Figma</p>
          </div>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/7ih7wk92a7cqcbm/logo-invision-studio.png?dl=0.png"
              width="56"
            />
            <p>Invision Studio</p>
          </div>
        </ToolsLogos>

        <p>
          Después de haber hecho un análisis serio de tu proyecto nos valemos de herramientas como Sketch o Figma, que nos permiten diseñar
                pantallas de alta calidad. Se lleva a cabo una fase
                inicial donde se crean todos los wireframes necesarios para tener una
                visión clara de la app, se llena con contenidos realistas y se le
                añade la navegación, de tal forma que desde el principio se tiene algo
                muy completo donde se pueden rebotar ideas y moldear el proyecto.
                Después se toma este borrador bien definido y se convierten en diseños
                de pantalla estilizados (UI mockups) que lucen como una app terminada,
                esto permite prácticamente ver justo como seria tu app antes de
                desarrollar nada todavía.
        </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg src="https://dl.dropboxusercontent.com/s/i0lfjr4ne6hodny/sketch-ui.png?dl=0" />
          <Caption>Sketch es el estándar de la industria en diseño UI.</Caption>
        </div>

        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/n6omk7knze9ids0/sketch-facebook.png?dl=0"
            width="500"
          />
          <Caption>Sketch sirve para mobile, desktop y web apps.</Caption>
        </div>
      </ExamplesGroup>
    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle> Prototipo Online</ServiceTitle>
        <BenefitSubTitle>Proyecto de Invision</BenefitSubTitle>
        <ToolsLabel>Herramientas relevantes</ToolsLabel>
        <ToolsLogos>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0"
              width="56"
            />
            <p>Invision</p>
          </div>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/7ih7wk92a7cqcbm/logo-invision-studio.png?dl=0.png"
              width="56"
            />
            <p>Invision Studio</p>
          </div>
        </ToolsLogos>

        <p>
          Tomamos las pantallas diseñadas típicamente en Sketch ( ó Figma) y las convertimos en un prototipo interactivo que se puede ver desde desde tu smartphone o de tu navegador web para presentarlo a tu equipo o gente involucrada en el proyecto. De esta manera la fase de feedback colaborativo permite al equipo visualizar y planear de acuerdo al gran avance que se tiene en este punto.
        </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/98obrtzxdrnzbcl/invision-monterrey.png?dl=0"
            width="500"
          />
          <Caption>
            Invision es una plataforma sofisticada para hacer prototipos
          </Caption>
        </div>

        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/06txe5joz3hzqxa/invision-studio-mexico.png?dl=0"
            width="500"
          />
          <Caption>Invision Studio es una alternativa viable a Sketch,</Caption>
        </div>
      </ExamplesGroup>
    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle>Prototipo Animado</ServiceTitle>
        <BenefitSubTitle>Microinteracciones + Alta Fidelidad </BenefitSubTitle>

        <ToolsLabel>Herramientas relevantes</ToolsLabel>

        <ToolsLogos>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/jsd6j3a3ylb58xu/logo-principle.png?dl=0"
              width="56"
            />
            <p>Princple</p>
          </div>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/1pcpct4np2jbc6d/logo-flinto.png?dl=0"
              width="56"
            />
            <p>Flinto</p>
          </div>
        </ToolsLogos>
        <p>
        Si quieres llevar el diseño de tu app al siguiente nivel, 
        lo que sigue seria crear dos entregables extra: una <a className="paragraphAnchor" href="/microinteracciones">serie de animaciones ó 
        micro-eventos </a>que llevaría tu app (realizadas en la aplicación de Mac llamada
         Principle) y un prototipo navegable de iOS también con animaciones pero mucho más cercano al producto final que puedes correr en tu iPhone o Mac (realizado en la app Flinto).
  
  Esta solución es para quienes admiran plataformas como Dribbble o Uplabs y quieren diseñar su app con ese nivel de sofisticación  visual y animada.
  </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/aro1j8eqip2pjca/switch_UI.gif?dl=0"
            width="500"
          />
          <Caption>La animación guía y deleita a tus usuarios</Caption>
        </div>

        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/kz5jgupc9v09t6p/socialshare_UI.gif?dl=0"
            width="500"
          />
          <Caption>El feedback visual aumenta la calidad de tu app</Caption>
        </div>
      </ExamplesGroup>
      <div className="UnevenExample">
        <ExampleImg
          src="https://dl.dropboxusercontent.com/s/z5n6jcel9lvg7cs/facebook_UI.gif?dl=0"
          width="500"
        />
        <Caption>
          Facebook Reactions, un perfecto ejemplo de microinteracción
        </Caption>
      </div>
    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle> Prototipo Premium </ServiceTitle>
        <BenefitSubTitle>Codificado en React/Framer X</BenefitSubTitle>

        <ToolsLabel>Herramientas relevantes</ToolsLabel>

        <ToolsLogos>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/xvrrf7zq1vy2p1a/logo-framerx.png?dl=0"
              width="56"
            />
            <p>Framer X</p>
          </div>
          <div className="AppBlock">
            <img
              src="https://dl.dropboxusercontent.com/s/hisdnmrh8n7z7oj/logo-react.png?dl=0"
              width="56"
            />
            <p>React</p>
          </div>
        </ToolsLogos>
        <p>
          Este tipo de prototipo es el más avanzado de todos y es recomendado
          para los clientes que quieren tener un prototipo hyperrealista de su idea o su proyecto.
          Seria creado con Framer X, TypeScript y React, partes de el prototipo pueden ser utilizadas en
          un proyecto de React, lo cual le añade mucho valor.
      </p>
        <p>
          Incluso si tu
          compañía usa una tecnología diferente a React, Framer X es la mejor
          opción para generar un prototipo de la más alta fidelidad que incluye
          inputs de texto, lógica y todas las interacciones completas de tu app,
          lo cual lo hace casi indistinguible de una app ya codificada para
          motivos de presentación y diseño de producto.
     </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/a8hnje9l0qdgez6/framerx.gif?dl=0"
            width="500"
          />
          <Caption>Framer X es la app más completa de prototipos</Caption>
        </div>

        <div>
          <ExampleImg
            src="https://dl.dropboxusercontent.com/s/iv635z7z51smsmb/framer-x-react-components.gif?dl=0"
            width="500"
          />
          <Caption>Puede generar componentes de React con TypeScript</Caption>
        </div>
      </ExamplesGroup>

    </InteractionServicesSection>
    <Fab />
  </Layout>
);

export default ServicesPage;
