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
        <h1 className="HeroTitle">Diseño UI + Prototipos</h1>
        <p className="HeroParagraph">
          Interaction se concentra en dar valor a los emprendedores de software.
          Somos expertos en interfaces de usuario y prototipos, nuestro trabajo
          se traslada a entregables visibles y concretos.
        </p>
      </div>
      <Wave />
    </div>
    <div className="Cards">
      <h2>Algunos de nuestros proyectos</h2>
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

    <Fab />
  </Layout>
);

export default PortfolioPage;
