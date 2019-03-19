import React from 'react'
import './Card.css'

/* eslint-disable */

const Card = props => (
    <div className="Card">
        <img alt="project" src={props.image} />
        <h3> {props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card