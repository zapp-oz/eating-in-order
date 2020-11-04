import React from 'react'

import Button from '../Button/Button'

import classes from './Card.module.css'

const Card = (props) => {
    
    const image = <img src={props.source} className={classes.img}/>
    let button = null
    let maxVal = null
    let COLOR = null

    if(props.btn){
        button = <Button>{props.btn}</Button>
    }

    if(props.max){
        if(parseInt(props.curVal) <= parseInt(props.maxVal)){
            COLOR = 'green'
        } else {
            COLOR = 'red'
        }

        maxVal = (
            <strong style={{
                color: COLOR
            }}>
                /{props.max}
            </strong>
        )
    }
    return (
        <div className={classes.card}>
            <h2 className={classes.heading}>{props.children}</h2>
            {image}
            <span className={classes.val}>{props.value}{maxVal}</span>
            {button}
        </div>
    )
}

export default Card