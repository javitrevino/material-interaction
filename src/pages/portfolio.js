import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/Card'
import Section from '../components/Section';
import Link from 'gatsby-link'
import Cell from '../components/Cell'

import staticdata from '../../staticdata.json'
import Fab from '../components/Fab'
import Wave from '../components/Wave'






const CardsGroup = styled.div`
    display: grid;
`

const SectionCaption = styled.h1`
  font-weight: 200;
  font-size: 32px;
  color: #717E90;
    font-weight: 600;
    font-family: 'Poppins';
  text-align: center;
  margin-bottom:90px;

  @media (max-width: 640px){
    font-size: 26px;
  }
 
`

const ToolsContainer = styled.div`
background: #fefefe;
    margin: 200px;
        display: grid;
    justify-content: center;
`

const SectionCellGroup = styled.div`

  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: auto;
    justify-content: center;
    
  }
`

const PortfolioPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Especialización en UI/UX</h1>
                <p className="HeroParagraph">
                    Hecha un vistazo a algunos de nuestros proyectos hechos para clientes de Monterrey. Interaction es la única empresa
                    mexicana dedicada exclusivamente al diseño UI/IX y a los prototipos interactivos de apps.
                    Nuestro portfolio te permitirá ver algo de nuestro trabajo. Muy pronto publicaremos más proyectos.
           </p>
            </div>
            <Wave />

        </div >
        <div className="Cards">
            <h2>Algunos de nuestros proyectos</h2>
            <div className="CardGroup">
                <Link to="/tec">
                    <Card
                        title="Tec de Monterrey"
                        text="Bee Working App"
                        image='https://dl.dropboxusercontent.com/s/if2k685lnqbmfem/tec_bg.jpg?dl=0' />
                </Link>
                <Link to="/banregio">

                    <Card
                        title="Banregio"
                        text="División Automotriz"
                        image='https://dl.dropboxusercontent.com/s/jjjbt54qjqn53qx/ban_bg.jpg?dl=0' />
                </Link>
                <Link to="/armedica">
                    <Card
                        title="AR Salud Integral"
                        text="iOS App"
                        image='https://dl.dropboxusercontent.com/s/bnrwmsooy3yhg1m/ar_bg.jpg?dl=0' />
                </Link>
                <Link to="/hola-vecino">

                    <Card
                        title="Hola Vecino"
                        text="Smart Mobile App"
                        image='https://dl.dropboxusercontent.com/s/qhu10h0w68pd4jd/hv_bg.jpg?dl=0' />
                </Link>
                <Link to="/prodynamics">

                    <Card
                        title="Prodynamics"
                        text="Android Material App"
                        image='https://dl.dropboxusercontent.com/s/jsk8doghwcau15u/pro_bg.jpg?dl=0' />
                </Link>
                <Link to="/oxxo-gas">

                    <Card
                        title="Oxxo Gas"
                        text="Desktop Web App"
                        image='https://dl.dropboxusercontent.com/s/z5878owjqph1kji/oxxo_bg.jpg?dl=0' />
                </Link>

            </div>
        </div>


        <Fab />

    </Layout >
)

export default PortfolioPage