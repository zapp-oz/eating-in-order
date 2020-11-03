import React from 'react'

import Button from '../Button/Button'

import classes from './Card.module.css'

const Card = (props) => {
    
    const image = <img src={props.source} className={classes.img}/>
    let button = null

    if(props.btn){
        button = <Button>{props.btn}</Button>
    }
    return (
        <div className={classes.card}>
            <h2 className={classes.heading}>{props.children}</h2>
            {image}
            <span className={classes.val}>{props.value}</span>
            {button}
        </div>
    )
}

export default Card