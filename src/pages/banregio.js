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
    grid-gap: 64px;
    grid-template-columns: repeat(2,auto);
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

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

const BanregioPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Banregio</h1>
                <h2 className="HeroSubtitle">Auto A Mi Precio</h2>
                <p className="HeroParagraph">
                    Esta propuesta fue diseñada para Banregio con el
                    objetivo de cumplir necesidades de su su división automotriz en relación al servicio
                    de asistencia en el camino  por medio de talleres mecánicos  así como también su plataforma para subasta de vehículos online.
                     El diseño del UI fue pensando para ser funcional, intuitivo y moderno.
           </p>
            </div>
            <Wave />

        </div >
        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/n2hy5v0oydah8eo/ban1.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/vcfvnxqbicrktxw/ban2.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/sw44hirgxle9eo3/ban3.png?dl=0' />


        </ScreensGroup>
        <CaseStudy>
            <p>
                Tuvimos la oportunidad de crear una interfaz de usuario simple y poderosa que da énfasis a los beneficios de Banregio Automotriz. El uso de colores corporativos e iconos de linea deja que el contenido hable por sí mismo para que los clientes puedan interactuar con los servicios.
            </p>
        </CaseStudy>
        <ScreensGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/0nyc7lu8f6av20k/ban4.png?dl=0' />

            <img className="Screen" src='https://dl.dropboxusercontent.com/s/g013b1s0bx9ku9u/ban7.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/02wu08m5uar6ie5/ban8.png?dl=0' />
        </ScreensGroup>
        <CaseStudy>
            <p>
                El uso de patrones de diseño estándar nos permite crear una experiencia de usuario que es predecible e intuitiva para los consumidore,de tal manera que no tienen que investigar cómo se utiliza el producto.

            </p>
        </CaseStudy>
        <ScreensGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/z8b1j39t2madbit/ban5.png?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/8xupi8lg4710q3b/ban6.png?dl=0' />

        </ScreensGroup>
        <CaseStudy>

            <p>
                Ligeros detalles de diseño y una navegación evidente en la interfaz de usuario nos permiten crear algo que a primera vista parece simple pero en realidad es una solución bien planeada para mayor satisfacción de clientes.

            </p>
        </CaseStudy>

        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/VWOSAKT8XRH" target="_blank">
                <img src="https://dl.dropboxusercontent.com/s/2pbnbn10h070v3i/logo-invision.png?dl=0" width="80"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>


        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacciones animadas</h1>
        </GroupHeader>
        <MicroGroup>
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/zz8lrhi14ddy6k0/banGif2.gif?dl=0' />
            <img className="Screen" src='https://dl.dropboxusercontent.com/s/ak8t1drgweffhpm/banGif1.gif?dl=0' />
        </MicroGroup>
        <CaseStudy>
            <p>
                La creación de micro-interacciones en el UI nos permitió crear un sistema de navegación adecuada para la búsqueda de talleres asociados con la compañía. Haciendo así que el servicio de atención en el camino funcionara de maravilla.
            </p>
        </CaseStudy>
        <ActionContainer>
            <MainBtnNoBorder href="/cotiza" >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>



    </Layout >
)

export default BanregioPage