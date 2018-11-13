import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
        display: grid;
        grid-template-columns: 60px auto;
        grid-gap: 25px;
        align-items: center;
        align-items: center;

        @media (max-width: 700px){
            grid-template-columns: 60px 100px;
            
        }

`
const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: white;
    border: 1px solid hsl(0, 0%, 95%);
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
    background-repeat: no-repeat;

    @media (max-width: 700px){
        border: 0px;
    }
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
     @media (max-width: 700px){
        border: 0px;
    }
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell 
