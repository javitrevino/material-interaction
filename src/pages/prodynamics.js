import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wave from '../components/Wave'

/* eslint-disable */

const ScreensGroup = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 1fr;
 justify-items: center;

    justify-content: center;
 

    @media (max-width: 647px) {
        grid-template-columns: 1fr;

    }

    /* ----------- iPhone X ----------- */



`

const MicroGroup = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-bottom: 112px;
    justify-items: center;
    @media (max-width: 647px) {
        grid-template-columns: 1fr;
    grid-gap: 64px; 

    }s
`

const ViewPrototype = styled.div`
text-align: center;

    display grid;
      justify-content: center;	
      justify-items: center;
  background: linear-gradient(125deg, #015FDF, #1ED2FC);
    color: white;
    padding-top: 48px;
    padding-bottom:48px;
  

`

const GroupHeader = styled.div`
display: grid;
justify-content: center;
justify-items: center;
margin-top: 88px;
padding-bottom: 88px;

`

const ActionContainer = styled.div`
display: grid;
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
background-color: #444444;


`

const SpecialBtn = styled.a`
text-align: center;
cursor: pointer;
background: linear-gradient(125deg, rgba(45, 55, 105, 1.00), rgba(234, 80, 108, 1.00));
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
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}
`

const MainBtnNoBorder = styled.a` 
@media (max-width: 576px){
  font-size: 18px !important;
}
text-align: center;
cursor: pointer;
background: linear-gradient(125deg, #015FDF, #1ED2FC);
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
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}


`

const CaseStudy = styled.div`
       display: grid;
    justify-content: center;
    padding: 3rem;
    margin: 3rem;
}

`

const ProdynamicsPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Prodynamics</h1>
                <h2 className="HeroSubtitle">Retail Android Experience</h2>
                <p className="HeroParagraph">
                  El objetivo de esta app de ser usada por el personal 
                  de Prodynamics en sus tiendas para buscar en el catálogo, procesar compras, 
                   y hacer encuestas. La visión fue dede crear una experiencia retail conextual para tablets con consideración de Material Design.
  
           </p>
            </div>
            <Wave />

        </div >
        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/7587srq7x53nt3d/pro1.png?dl=0' />
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/773mta658f7csqi/pro2.png?dl=0' />

     
        </ScreensGroup>
        <CaseStudy>
            <p>
Android es una plataforma que requiere consideraciones especiales, en el caso de esta experiencia se requería pensar en las tablet Nexus que se usaría en las tiendas de Prodynamics
            </p>
        </CaseStudy>
        <ScreensGroup>

            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/soz0xib05di7wlw/pro3.png?dl=0' />
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/faespzxzhv3cn3v/pro4.png?dl=0' />
            

        </ScreensGroup>
        <CaseStudy>
            <p>
                Se trabajó pensando cuidadosamente en la experiencia del personal y de los clientes, procurando acera algo que fuera muy amigable, fácil de usar pero que luciera bien al mismo tiempo.ndroid es una plataforma que requiere consideraciones especiales, en el caso de esta experiencia se requería pensar en las tablet Nexus que se usaría en las tiendas de Prodynamics
            </p>

            <p>
                El uso de pequeños detalles cómo ilustraciones y gráficos ayudan a mejorar la apariencia e impresión generada por una app.
            </p>
        </CaseStudy>
        <ScreensGroup>
        <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/me3sn1gf1zlcgir/pro5.png?dl=0' />
        <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/j49gz1melozo971/pro6.png?dl=0' />
     
        </ScreensGroup>
        <CaseStudy>
            <p>
                Para el diseño visual me inspiré en la especificación de Material Design de Google. Tiene una coherencia natural con Android y contiene patrones de diseño que son familiares, fáciles entender para la actividad comercial para la cual esta app fue planeada. 

            </p>
        </CaseStudy>


        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/AHP2ULB6GUN" target="_blank">
                <img src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>
            </a>
        </ViewPrototype>
      
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>


    </Layout >
)

export default ProdynamicsPage