import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wave from '../components/Wave'



const ScreensGroup = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: auto;
 justify-items: center;

    justify-content: center;

    @media (max-width: 647px) {
        grid-template-columns: 1fr;

    }

`

const MicroGroup = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: auto;
    justify-content: center;
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
    background: #e2e2e22e;
    color: white;
    padding-top: 48px;
    padding-bottom:48px;
      background: linear-gradient(125deg, #015FDF, #1ED2FC);

  

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

const Separator = styled.div`
height: 6rem;
 `

const OxxoPage = ({ data }) => (
    <Layout>

        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Oxxo Gas</h1>
                <h2 className="HeroSubtitle">Checklist Virtual</h2>
                <p className="HeroParagraph">
                    Checklist Virtual es una web app que se diseño para Oxxo Gas. Es una plataforma web para gerentes
                    de campo que permite hacer registros y llevar la administración del control de calidad de las estaciones de Oxxo Gas.

                    </p>
            </div>
            <Wave />

        </div>

        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img alt="UI" className="WideScreen" src='https://dl.dropboxusercontent.com/s/1vs5wmp4bq7hgl7/oxxo1.png?dl=0' />

        </ScreensGroup>
        <CaseStudy>
            <p>
                Checklist virtual fue una web app diseñada para Oxxo Gas con la finalidad de que ser utilizada por gerentes para llevar el control de calidad de las estaciones de la corporación.
            </p>
            <p>
                Anteriormente se trabajaba todo eso en papel pero nos pidieron diseñar una solución que requería ser una web app principalmente por sus propios requerimientos internos.
            </p>
        </CaseStudy>
        <ScreensGroup>
            <img alt="UI" className="WideScreen" src='https://dl.dropboxusercontent.com/s/ek4t0vvtmpx3q2s/oxxo2.png?dl=0' />

        </ScreensGroup>

        <ScreensGroup>
            <img alt="UI" className="WideScreen" src='https://dl.dropboxusercontent.com/s/uajr49kfw44nkoq/oxxo3.png?dl=0' />

        </ScreensGroup>
        <Separator />

        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/5TR2NC8YGHJ" target="_blank" rel="noopener noreferrer">
                <img alt="Invision" src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>

        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacción animada</h1>
        </GroupHeader>
        <MicroGroup>
            <img alt="OXXO Animacion" width="400" src='https://dl.dropboxusercontent.com/s/rj2gbzftwrd55fh/oxxoanimation.gif?dl=0' />

        </MicroGroup>
        <CaseStudy>
            <p>
                Este es un concepto interesante que e trabajó  para crear un glosario de calidad para smartphones pero que a diferencia de la web app, no fue desarrollado al final.
            </p>
        </CaseStudy>
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>


    </Layout>

)

export default OxxoPage