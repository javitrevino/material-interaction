import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import '../components/layout.css'
import Wave from '../components/Wave'
import Fab from '../components/Fab'


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
 font-size: 40px;
 font-weight: 200;
 text-align: center;
 margin-bottom: 64px;
 @media (max-width: 640px){
    font-size: 22px;
    
}
`

const FormGroup = styled.div`
display: grid;
align-content: center;
`



const ContactPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Cotiza Hoy</h1>
                <p className="HeroParagraph">
                    Contacta a interaction hoy para cotizar tu proyecto. Nos puedes contar de que trata tu proyecto de software
                    en la forma de contacto y nosotros nos pondremos en contacto para cotizarte. También nos puede contactar en los siguientes canales:
                </p>
                <div className="ContactArea">
                    <div>

                        <svg width="13px" height="19px" viewBox="0 0 13 19">
                            <g id="mine" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Mobile" transform="translate(-228.000000, -240.000000)">
                                    <g id="phone" transform="translate(229.000000, 241.000000)">
                                        <rect id="Rectangle-29" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x="0" y="0" width="11" height="17" rx="2"></rect>
                                        <circle id="Oval-19" fill="#FFFFFF" cx="5.5" cy="14" r="1"></circle>
                                        <path d="M1.5,11.5 L9.5,11.5" id="Line-12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <a href="tel:+528116558570"> 8116558570 </a>
                    </div>
                    <div>


                        <svg width="20px" height="15px" viewBox="0 0 20 15">
                            <g id="mine" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <g id="Mobile" transform="translate(-253.000000, -242.000000)" stroke="#FFFFFF" stroke-width="2">
                                    <g id="mail" transform="translate(254.000000, 243.000000)">
                                        <g id="Group">
                                            <path d="M18,2.93504308 L9.52627572,8.59910919 C9.18991233,8.82394357 8.75121317,8.82394357 8.41484977,8.59910919 L0,2.97439639 L0,1 C-6.76353751e-17,0.44771525 0.44771525,3.65416674e-15 1,3.55271368e-15 L17,3.55271368e-15 C17.5522847,3.45126062e-15 18,0.44771525 18,1 L18,2.93504308 Z" id="Combined-Shape"></path>
                                            <rect id="Rectangle-8" x="0" y="0" width="18" height="13" rx="1"></rect>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <a href="mailto:interactionmx@gmail.com"> ventas@interaction.mx </a>
                    </div>
                </div>
            </div>
            <Wave />


        </div >
        <FormGroup>
            <FormTitle> Cuéntanos sobre tu proyecto </FormTitle>
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
                <p class="FormBtnWrapr">
                    <MainBtn type="submit">Enviar</MainBtn>
                </p>
            </form>
        </FormGroup>
        <Fab />

    </Layout >
)

export default ContactPage