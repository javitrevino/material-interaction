import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import '../components/layout.css'

const FormContainer = styled.div`
display: grid;
margin: 40px;
`
const MainBtn = styled.button` 
cursor: pointer;
background: linear-gradient(125deg, #015FDF, #1ED2FC);
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

@media screen and (max-width: 576px){
  font-size: 18px !important;
  margin: 32px 0px !important;
}

`

const FormTitle = styled.h2`
 font-size: 27px;
 font-weight: 600;
 text-align: center;
 margin-bottom: 64px;
`

const ContactPage = ({ data }) => (
    <Layout>
        <div className="HeroProject">
            <div className="HeroAltGroup">
                <h1>Cotiza</h1>
                <p>
                    Contacta a interaction hoy para cotizar tu proyecto. Nos puedes contar de que trata tu proyecto de software
                    en la forma de contacto y nosotros nos pondremos en contacto para cotizarte. También nos puede contactar en los siguientes canales:
                </p>
                <p>
                    8116558570
                </p>
                <p>
                    interactionmx@gmail.com
                </p>
            </div>

        </div >

        <FormTitle> Cuentanos acerca de tu proyecto </FormTitle>
        <form className="Form" name="cotizaciones" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
            <input type="hidden" name="form-name" value="cotizaciones" />
            <p>
                <label>Nombre
                    <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Empresa
                    <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>

            <p>
                <label>Mensaje <textarea name="message"></textarea></label>

            </p>
            <p>
                <MainBtn type="submit">Enviar</MainBtn>
            </p>
        </form>

    </Layout >
)

export default ContactPage