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
    margin-bottom: 120px;

    @media (max-width: 647px) {
        grid-template-columns: 1fr;

    }

`

const MicroGroup = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: auto;
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
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/1vs5wmp4bq7hgl7/oxxo1.png?dl=0' />
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/ek4t0vvtmpx3q2s/oxxo2.png?dl=0' />
            <img className="WideScreen" src='https://dl.dropboxusercontent.com/s/uajr49kfw44nkoq/oxxo3.png?dl=0' />

        </ScreensGroup>

        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/JYOR9SPBUTW" target="_blank">
                <img src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>

        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacción animada</h1>
        </GroupHeader>
        <MicroGroup>
            <img width="400" src='https://dl.dropboxusercontent.com/s/rj2gbzftwrd55fh/oxxoanimation.gif?dl=0' />

        </MicroGroup>
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>


    </Layout>

)

export default OxxoPage