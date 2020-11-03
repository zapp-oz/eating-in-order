import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/Button/Button'
import Card from '../../ui/Card/Card'
import Sidebar from '../../ui/Sidebar/Sidebar'

import classes from './Dashboard.module.css'

const Dashboard = (props) => {
    return (
        <div className={classes.main}>
            <Sidebar></Sidebar>
            <div className={classes.details}>
                <div className={classes.bar}>
                    <span 
                        style={{
                            display: 'block',
                            marginLeft: '100px'
                        }}>
                            Dashboard
                    </span>
                </div>
                <div className={classes.additem}>
                    <Link to={{
                        pathname: '/profile/foodSearch'
                    }}
                    className={classes.button}>
                        <Button>Add items for today!</Button>
                    </Link>
                </div>
                <div className={classes.today}>
                    <p className={classes.heading}>
                            Today's Meals
                    </p>
                    <div className={classes.content}>
                        <Card btn="Delete" source="/assets/images/biryani.svg">Chicken Biryani</Card>
                        <Card btn="Delete" source="/assets/images/salad.svg">Caesar's Salad</Card>
                    </div>
                </div>
                <div className={classes.nutrient}>
                    <p className={classes.heading}>Nutrient Breakdown</p>
                    <div className={classes.content}>
                        <Card value='400 kcal' source="/assets/images/calorie.svg">Calories</Card>
                        <Card value='30 g' source="/assets/images/protein.svg">protein</Card>
                        <Card value='46 g' source="/assets/images/carbs.svg">Carbohydrates</Card>
                        <Card value='20g' source="/assets/images/trans-fat.svg">fats</Card>
                        <Card value='15g' source="/assets/images/fiber.svg">fiber</Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard