import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../ui/Button/Button'

import classes from './SignUp.module.css'

const SignUp = (props) => {
    return (
        <div>
            <div className={classes.bar}>
                <img className={classes.icon} src="/assets/images/vegan-food.svg"></img>
                <h3 style={{
                    color: 'white',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontFamily: 'Bebas Neue',
                    fontSize: '30px',
                    margin: '0px'
                }}>
                    nutrtion tracker
                </h3>
            </div>
            <div>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <form className={classes.form} action='/profile' method='GET'>  
                            <input 
                                type='text'
                                name='username' 
                                placeholder='username' 
                                autoComplete='off' 
                                className={classes.input}
                                minLength='8'
                                required>
                            </input>
                            <input 
                                type='password'
                                placeholder='password' 
                                autoComplete='off' 
                                className={classes.input}
                                minLength='8'
                                required>
                            </input>
                            <input 
                                type='number'
                                placeholder='age' 
                                autoComplete='off' 
                                className={classes.input}
                                required>
                            </input>
                            <input 
                                type='number'
                                placeholder='height (cm)' 
                                autoComplete='off' 
                                className={classes.input}
                                required>
                            </input>
                            <input 
                                type='number'
                                placeholder='weight (kg)' 
                                autoComplete='off' 
                                className={classes.input}
                                required>
                            </input>
                            <div style={{
                                    padding: '5px'
                                }}>
                                <input 
                                    type='radio'
                                    id='veg'
                                    name='food'
                                    value='Vegetarian' 
                                    style={{
                                        display: 'inline-block',
                                        padding: '5px'
                                    }}
                                    required>
                                </input>
                                <label 
                                    for='veg'
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'Abel,cursive',
                                        color: 'white',
                                        padding: '5px'
                                    }}>
                                        Vegetarian
                                </label>
                                <input 
                                    type='radio'
                                    id='non-veg'
                                    name='food'
                                    value='Non-Vegetarian' 
                                    style={{
                                        display: 'inline-block',
                                        padding: '5px'
                                    }}
                                    required>
                                </input>
                                <label 
                                    for='non-veg'
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'Abel,cursive',
                                        color: 'white',
                                        padding: '5px'
                                    }}>
                                        Non-Vegetarian
                                </label>
                            </div>
                            <div
                                style={{
                                    padding: '5px'
                                }}>
                                <input 
                                    type='radio'
                                    id='male' 
                                    name='gender'
                                    value='male' 
                                    style={{
                                        display: 'inline-block',
                                        padding: '5px'
                                    }}
                                    required>
                                </input>
                                <label 
                                    for='male'
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'Abel,cursive',
                                        color: 'white',
                                        padding: '5px'
                                    }}>
                                        Male
                                </label>
                                <input 
                                    type='radio'
                                    id='female'
                                    name='gender'
                                    value='female' 
                                    style={{
                                        display: 'inline-block',
                                        padding: '5px'
                                    }}
                                    required>
                                </input>
                                <label 
                                    for='female'
                                    style={{
                                        fontSize: '20px',
                                        fontFamily: 'Abel,cursive',
                                        color: 'white',
                                        padding: '5px'
                                    }}>
                                        Female
                                </label>
                            </div>
                            <div>
                                <Button>sign up</Button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.right}>
                        <span className={classes.text}>Sign Up and change your life!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp