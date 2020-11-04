import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/Button/Button'
import Sidebar from '../../ui/Sidebar/Sidebar'


import classes from './Search.module.css'

const Search = (props) => {
    return (
        <div className={classes.main}>
            <Sidebar></Sidebar>
            <div className={classes.details}>
                <div className={classes.bar}>
                    <span style={{
                        display: 'block',
                        marginLeft: '100px'
                    }}>
                        Search for food
                    </span>
                </div>
                <div className={classes.foodSearch}>
                    <input 
                        type='text' 
                        placeholder='food item'
                        autoComplete='off'
                        className={classes.searchInput}
                        defaultValue="Pasta"></input>
                    <div>
                        <Button>Search</Button>
                    </div>
                </div>
                <div className={classes.foodItems}>
                    <div className={classes.item}>
                        <div>
                            <p className={classes.heading}>Ravioli</p>
                            <p className={classes.heading}>Cuisine: Italian</p>
                        </div>
                        <div>
                            <p className={classes.text}><strong>Protein</strong>: 15g</p>
                            <p className={classes.text}><strong>Carbohydrates</strong>: 16g</p>
                            <p className={classes.text}><strong>Fat</strong>: 8g</p>
                            <p className={classes.text}><strong>Fiber</strong>: 5g</p>
                        </div>
                        <div>
                            <input 
                                type='number' 
                                placeholder='quantity' 
                                max='5' 
                                autoComplete='off'
                                className={classes.input}>
                            </input>
                            <Link to={{
                                pathname: '/profile/dashboard'
                            }}>
                                <Button>Add!</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            <p className={classes.heading}>Penne</p>
                            <p className={classes.heading}>Cuisine: Italian</p>
                        </div>
                        <div>
                            <p className={classes.text}><strong>Protein</strong>: 10g</p>
                            <p className={classes.text}><strong>Carbohydrates</strong>: 15g</p>
                            <p className={classes.text}><strong>Fat</strong>: 5g</p>
                            <p className={classes.text}><strong>Fiber</strong>: 6g</p>
                        </div>
                        <div>
                            <input 
                                type='number' 
                                placeholder='quantity' 
                                max='5' 
                                autoComplete='off'
                                className={classes.input}>
                            </input>
                            <Link to={{
                                pathname: '/profile/dashboard'
                            }}>
                                <Button>Add!</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            <p className={classes.heading}>Lasagne</p>
                            <p className={classes.heading}>Cuisine: Italian</p>
                        </div>
                        <div>
                            <p className={classes.text}><strong>Protein</strong>: 10g</p>
                            <p className={classes.text}><strong>Carbohydrates</strong>: 30g</p>
                            <p className={classes.text}><strong>Fat</strong>: 6g</p>
                            <p className={classes.text}><strong>Fiber</strong>: 2g</p>
                        </div>
                        <div>
                            <input 
                                type='number' 
                                placeholder='quantity' 
                                max='5' 
                                autoComplete='off'
                                className={classes.input}>
                            </input>
                            <Link to={{
                                pathname: '/profile/dashboard'
                            }}>
                                <Button>Add!</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search