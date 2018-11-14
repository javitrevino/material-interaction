import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wave from '../components/Wave'



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

`

const MicroGroup = styled.div`
       display: grid;
    grid-gap: 64px;
    grid-template-columns: repeat(2,auto);
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 112px;
    justify-items: center;
    @media (max-width: 647px) {
        grid-template-columns: 1fr;
    grid-gap: 64px; 

    }
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

const SaludPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">AR Médica</h1>
                <h2 className="HeroSubtitle">Salud Integral</h2>
                <p className="HeroParagraph">
                    Este concepto de app de iOS fue diseñado para AR Médica, una empresa de servicios de atención de emergencias y consultas médicas.  Se buscó hacer un diseño de interfaz placentera y funcional que sea familiar para usuarios de iOS por el uso de List Views y el diseño notificaciones
                     para usuarios.
            </p>
            </div>
            <Wave />

        </div >
        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/8ykntwb7u4zt1yb/ar1.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/jngapjqlecr06gk/ar2.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/t5d80nrc2vuwcjj/ar3.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/t5d80nrc2vuwcjj/ar3.png?dl=0vcivpinixx8ucka/ar4.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/dk99dbvpmgu0qqb/ar5.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/uqihf7cxulclsqo/ar6.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/0g907t5r1kivi5a/ar7.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/26e0wsk7xikap4o/ar8.png?dl=0' />
        </ScreensGroup>

        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/Q9P2SZWTZAM" target="_blank">
                <img src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>


        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacción animada</h1>
        </GroupHeader>
        <MicroGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/2g8ckglirsxhihq/AR.gif?dl=0' />
        </MicroGroup>
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>





    </Layout >
)

export default SaludPage