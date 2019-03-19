import React from "react";
import Layout from "../components/layout";
import Card from "../components/Card";
import Link from "gatsby-link";
import Fab from "../components/Fab";
import Wave from "../components/Wave";


const PortfolioPage = ({ data }) => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="HeroTitle">Javier Treviño</h1>
        <p className="HeroParagraph">
          Bienvenidos a mi portafolio de proyectos.
          Soy Javier Eduardo Treviño Aguilar, un diseñador UI/UX de Monterrey, México. Mi vocación es trabajar en productos de software, experiencias digitales en mobile, web y cualquier otro medio emergente en el mundo digital.
        </p>
      </div>
      <Wave />
    </div>
    <div className="Cards">

      <div className="CardGroup">
        <Link to="/tec">
          <Card
            title="Tec de Monterrey"
            text="Bee Working App"
            image="https://dl.dropboxusercontent.com/s/if2k685lnqbmfem/tec_bg.jpg?dl=0"
          />
        </Link>
        <Link to="/banregio">
          <Card
            title="Banregio"
            text="División Automotriz"
            image="https://dl.dropboxusercontent.com/s/jjjbt54qjqn53qx/ban_bg.jpg?dl=0"
          />
        </Link>
        <Link to="/armedica">
          <Card
            title="AR Salud Integral"
            text="iOS App"
            image="https://dl.dropboxusercontent.com/s/bnrwmsooy3yhg1m/ar_bg.jpg?dl=0"
          />
        </Link>
        <Link to="/hola-vecino">
          <Card
            title="Hola Vecino"
            text="Smart Mobile App"
            image="https://dl.dropboxusercontent.com/s/qhu10h0w68pd4jd/hv_bg.jpg?dl=0"
          />
        </Link>
        <Link to="/prodynamics">
          <Card
            title="Prodynamics"
            text="Android Material App"
            image="https://dl.dropboxusercontent.com/s/jsk8doghwcau15u/pro_bg.jpg?dl=0"
          />
        </Link>
        <Link to="/oxxo-gas">
          <Card
            title="Oxxo Gas"
            text="Desktop Web App"
            image="https://dl.dropboxusercontent.com/s/z5878owjqph1kji/oxxo_bg.jpg?dl=0"
          />
        </Link>
      </div>
    </div>

  </Layout>
);

export default PortfolioPage;
