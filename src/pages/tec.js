import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wave from '../components/Wave'

/* eslint-disable */

const ScreensGroup = styled.div`
    display: grid;
       grid-gap: 80px;
    grid-template-columns: repeat(3,310px);
 justify-items: center;

    justify-content: center;
    margin-bottom: 120px;

    @media (max-width: 647px) {
        grid-template-columns: 1fr;

    }

@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {
    
grid-gap: 100px;
    grid-template-columns: repeat(2,310px);


}

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {
       grid-gap: 80px;
    grid-template-columns: repeat(2,310px);
}




`

const MicroGroup = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(3, 310px);
    justify-content: center;
    margin-bottom: 112px;
    justify-items: center;
    @media (max-width: 647px) {
        grid-template-columns: 1fr;
    grid-gap: 64px; 

    }

    @media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {
        grid-template-columns: repeat(2, 310px);

grid-gap: 40px;
   


}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {
       grid-template-columns: 1fr;

grid-gap: 80px;
}

`

const ViewPrototype = styled.div`
text-align: center;
        display: grid;
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

const ProjectPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Tecnólogico de Monterrey</h1>
                <h2 className="HeroSubtitle">Bee Working</h2>
                <p className="HeroParagraph">
                    Bee Working es una propuesta de app que se diseñó para el Tec de Monterrey, su propósito es
 el de ayudar a los estudiantes a colaborar en sus proyectos en equipo
 y mostrar contenidos de educación financiera. La interfaz es simple y
 minimalista haciendo énfasis en el contenido para aayudar a  los usuarios a
 colaborar en harmonia.
           </p>
            </div>
            <Wave />
        </div >
        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/u8o04ee0eig05rn/tec1.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/yf8z9ykjvo3c7vb/tec2.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/lbpvassyb7hnd0b/tec3.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/3ptj5dshd95j7u6/tec4.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/z524y9nhe333et6/tec5.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/5nswhb0jc1m0n63/tec6.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/w24e7r9k6lxy1o8/tec7.png?dl=0' />
            <img className="Screen" alt="UI Design" src='https://dl.dropboxusercontent.com/s/hdwm1aobs7sdefp/tec8.png?dl=0' />
        </ScreensGroup>

        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/JKP13NMNSXF" target="_blank">
                <img alt="Invision" src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>


        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacciones animadas</h1>
        </GroupHeader>
        <MicroGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/a299nl36g3h9eot/tec_micro1.gif?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/lzrs1as4sr6de33/tec_micro2.gif?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/9bupg1cu7lfzs41/tec_micro3.gif?dl=0' />
        </MicroGroup>
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>


    </Layout >
)

export default ProjectPage