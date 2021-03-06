import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../ui/Button/Button'

import classes from './Login.module.css'

const Login = (props) => {
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
                    eating in order
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
                                required>
                            </input>
                            <input 
                                type='password'
                                placeholder='password' 
                                autoComplete='off' 
                                className={classes.input}
                                required>
                            </input>
                            <div>
                                <Button>login</Button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.right}>
                        <span className={classes.text}>Login and finish what you took up!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login