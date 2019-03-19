import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import '../components/layout.css'

/* eslint-disable */

const MainBtn = styled.a` 
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



const SuccessPage = ({ data }) => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1 className="HeroTitle">Gracias</h1>
                <p className="HeroParagraph">
                        Gracias por tu interés, Interaction se pondrá pronto en contacto contigo para darle seguimiento a tu proyecto. 
                        
                </p>
                <div className="GoBack">
                    <MainBtn href="/">Volver a Home</MainBtn>
                </div>
            </div>
          
        </div >


    </Layout >
)

export default SuccessPage