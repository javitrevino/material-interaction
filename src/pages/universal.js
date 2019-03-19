import React from "react"
import ColoredLayout from "../components/ColoredLayout";
import '../components/Blog.scss'



const UniversalPage = ({ data }) => (
    <ColoredLayout>
        <div className="BlogWelcome">
            <h1>Diseño Universal </h1>
            <p>
                Interaction es la primera empresa de prototipos de software en México.  Esto nos hace únicos, pero también el hecho de que creamos nuestro propio método de diseño, se llama Diseño Universal. Consiste en combinar las mejores partes del Diseño UI, UX y el Design Thinking para crear una propuesta única de servicios donde el prototipo es la pieza central de todo. Esto se debe a que consideramos que *los prototipos son la mejor manera de validar y moldear la visión de tu app*. No importa si es para tu propio startup o en un proyecto para tus clientes, los prototipos de software son el puente ideal entre el diseño y el desarrollo.
            </p>
            <p>

                El Diseño Universal se llama así porque nuestros prototipos interactivos contienen todo lo necesario para considerar tu faceta de diseño terminada, es decir dentro de *un prototipo se define el razonamiento de los usuarios,  la  navegación, , la estética visual , animaciones , estructura de contenidos y hasta las especificaciones de desarrollo*. Es la amalgamación de lo que normalmente harían varias agencias pero que sí trabajas con Interaction solo tendrás que lidiar con una sola empresa que se encarga de todos los aspectos relevantes al diseño de tu app para que puedas concentrarte en lo demás y tener mas éxito. Nuestro objetivo con este método es ayudarte como emprendedor/administrador a que hagas mejor trabajo en tu organización , corras menos riegos y ahorres recursos con el poder del diseño. Nuestro enfoque es en mejorar los estándares de diseño del software hecho en nuestro país al ayudar a los lideres a que sus proyectos sean más exitosos y sus vidas más fáciles.
            </p>
        </div>



    </ColoredLayout>

);

export default UniversalPage;

