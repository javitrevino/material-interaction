import React from 'react'
import './Gif.css'


/* eslint-disable */

const Gif = props => (
    <img alt="UI GIF" width="300" className="GifImg" src={props.image}></img>
)

export default Gif