import React from 'react'
import Link from 'gatsby-link'
import "./HeaderAlternative.css";
import styled from 'styled-components'

const QuoteBtn = styled.a` 
color: white;
background: linear-gradient(121deg, #015FDF, #1ED2FC);
border-radius: 15px;
font-size: 22px;
line-height: 40px;
font-weight: 500;
width: 138px;
height: 40px;
text-align: center;
vertical-align: middle;
 @media (max-width: 576px){
    width: 104px;
    }

`
class HeaderAlternative extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',
            this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }


    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    <Link className="Logo" to="/"> <img src={require('../images/interaction-logo.png')} alt="Interaction" width="180"></img> </Link>
                    <Link to="/servicios">Servicios</Link>
                    <Link>Portfolio</Link>
                    <QuoteBtn>Cotizar</QuoteBtn>
                </div>
            </div>
        )
    }
}

export default HeaderAlternative
