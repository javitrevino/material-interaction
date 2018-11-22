import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './layout.css'

/* eslint-disable */

const MenuTrigger = styled.a`
display: none;
background-color: rgba(1,1,1,  0.8);
width:80px;
height: 80px;
border-radius: 200px;
justify-items: center;
align-items: center;
position: fixed;
left: 8px;
bottom: 64px;


@media (max-width: 700px){
    display: grid;
    
}
 `





class Fab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ShowMenu: false }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu

        }));


    }

    render() {
        const menu = (
            <div className="FabMaster">

                <div className="CloseTrigger" onClick={this.handleClick}> >
                    <svg width="30px" height="30px">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Artboard" transform="translate(-1.000000, -1.000000)" fill="#FFFFFF">
                                <g id="closeIcon">
                                    <path d="M-4,16 C-4,14.896 -3.104,14 -2,14 L34,14 C35.104,14 36,14.896 36,16 C36,17.104 35.104,18 34,18 L-2,18 C-3.104,18 -4,17.104 -4,16 Z" id="Path" transform="translate(16.000000, 16.000000) rotate(45.000000) translate(-16.000000, -16.000000) "></path>
                                    <path d="M-4,16 C-4,14.896 -3.104,14 -2,14 L34,14 C35.104,14 36,14.896 36,16 C36,17.104 35.104,18 34,18 L-2,18 C-3.104,18 -4,17.104 -4,16 Z" id="Path" transform="translate(16.000000, 16.000000) rotate(-45.000000) translate(-16.000000, -16.000000) "></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="MobileMenu">

                    <Link to="/">Inicio</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/cotiza">Cotizar</Link>

                </div>
            </div >
        );

        return (
            <section>
                <MenuTrigger onClick={this.handleClick}>
                    <svg width="32px" height="28px" viewBox="0 0 32 28">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Artboard" fill="#FFFFFF">
                                <g id="Menu">
                                    <path d="M0,2 C0,0.896 0.896,0 2,0 L30,0 C31.104,0 32,0.896 32,2 C32,3.104 31.104,4 30,4 L2,4 C0.896,4 0,3.104 0,2 Z" id="Path"></path>
                                    <path d="M0,8 C0,6.896 0.896,6 2,6 L24,6 C25.104,6 26,6.896 26,8 C26,9.104 25.104,10 24,10 L2,10 C0.896,10 0,9.104 0,8 Z" id="Path"></path>
                                    <path d="M0,14 C0,12.896 0.896,12 2,12 L26,12 C27.104,12 28,12.896 28,14 C28,15.104 27.104,16 26,16 L2,16 C0.896,16 0,15.104 0,14 Z" id="Path"></path>
                                    <path d="M0,20 C0,18.896 0.896,18 2,18 L18,18 C19.104,18 20,18.896 20,20 C20,21.104 19.104,22 18,22 L2,22 C0.896,22 0,21.104 0,20 Z" id="Path"></path>
                                    <path d="M0,26 C0,24.896 0.896,24 2,24 L12,24 C13.104,24 14,24.896 14,26 C14,27.104 13.104,28 12,28 L2,28 C0.896,28 0,27.104 0,26 Z" id="Path"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </MenuTrigger>
                <div>
                    {this.state.showMenu ? menu : ''}
                </div>
            </section>
        );
    }
}

export default Fab