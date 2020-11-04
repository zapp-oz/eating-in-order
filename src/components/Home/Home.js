import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/Button/Button'

import classes from './Home.module.css'

const Home = (props) => {
    return (
        <div>
            <div className={classes.bar}>
                <img 
                    className={classes.headicon}
                    src="/assets/images/vegan-food.svg"
                ></img>
                <div>
                    <Link to={{
                        pathname: '/login'
                    }}
                    className={classes.active}>
                        <Button>Login</Button>
                    </Link>
                    <Link to={{
                        pathname: '/signup'
                    }}
                    className={classes.active}>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
            <div className={classes.main}>
                <h1 style={{fontSize: '32px'}} className={classes.text}>Eating in order</h1>
                <img className={classes.image} src="/assets/images/cardiogram.svg"/>
                <span className={classes.text}>A better way to manage your health and nutrition!</span>
            </div>
        </div>
    )
}

export default Home