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
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
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


const HolaPage = ({ data }) => (
    <Layout>

        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Hola Vecino</h1>
                <h2 className="HeroSubtitle">Smart Home App</h2>
                <p className="HeroParagraph">
                    Hola Vecino es una app que fue diseñada para un startup nuevo de Monterrey.
                    Sirve para administrar colonias privadas. Permite interactuar con aspectos como visitas, áreas comunes y notificaciones.
                    Interaction se encargó de crear un UI moderno y funcional para alcanzar los objetivos de diseño visual, UX y estructura.

                    </p>
            </div>
            <Wave />
        </div>

        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>

        <ScreensGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/88a6opzh9rs66gl/hv1.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/0ylk2n0uhy50pbd/hv2.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/rnrkjtjce06aamy/hv3.png?dl=0' />

        </ScreensGroup>
        <CaseStudy>
            <p>
                El onboarding es un aspecto cada vez más importante en las apps modernas. Nos permite presentarle al usuario de que trata nuestro producto.
En el caso de Hola Vecino se trata del manejo de todos los aspectos de una colonia privada.
            </p>
        </CaseStudy>
        <ScreensGroup>

            <img className="Screen" src='https://dl.dropboxusercontent.com/s/ddmgexs50mx8aw7/hv4.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/6damie8up2346tz/hv5.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/26x1rvbotmcwa9h/hv6.png?dl=0' />

        </ScreensGroup>
        <CaseStudy>
            <p>
                El objetivo fue crear una interfaz y experiencia que dieran la impresión de estar usando una app moderna, segura e intuitiva. El uso de elementos de Diseño UI como bordes, sombras y jerarquía visual hacen que las pequeñas cosas vayan sumándoselo para crear algo mucho mas robusto y bien definido.
            </p>
        </CaseStudy>
        <ScreensGroup>

            <img className="Screen" src='https://dl.dropboxusercontent.com/s/7l7ysnpgd8at8q0/hv7.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/it6np0hk72tuqn6/hv8.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/x3igc04001oj4e3/hv9.png?dl=0' />

        </ScreensGroup>
        <CaseStudy>
            <p>
                Ayudamos a este emprendedor a moldear su visión. Cuando inicialmente habló con nosotros solo tenia una idea básica de lo que quería pero nuestros diseños de Sketch y el prototipo de Invision le ayudo bastante y hoy se encuentra desarrollando esta app con su equipo de ingenieros.
            </p>
        </CaseStudy>
        <ScreensGroup>


            <img className="Screen" src='https://dl.dropboxusercontent.com/s/d4bd4mo174lifeu/hv10.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/eekmhek8s01xdg2/hv11.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/evsql4j0b24ohne/hv12.png?dl=0' />



        </ScreensGroup>
        <CaseStudy>
            <p>
                Este es un buen ejemplo en el cual un prototipo ligero hecho con Sketch e Invision puede hacer una enorme diferencia.
            </p>
        </CaseStudy>
        <ScreensGroup>


            <img className="Screen" src='https://dl.dropboxusercontent.com/s/91t5omj90fmtfem/hv13.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/mp863ot8x72pua8/hv14.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/20hko0hjuvwjb5p/hv15.png?dl=0' />



        </ScreensGroup>
        <Separator />
        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/29OWRSTT873" target=" _blank">
                <img src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>



        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>


    </Layout >

)

export default HolaPage