import React from 'react'
import styled from 'styled-components'

/* eslint-disable */

const FooterGroup = styled.div`
background-color: rgb(51, 51, 51);
color: white;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;

`

const Copyright = styled.div`
    color: "#486791"
    max-width: 500px; 
    margin: 0 auto;
    padding: 0 20px;
    font-size: 18px;
`

const Footer = ({ data, children }) => (
    <FooterGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer;