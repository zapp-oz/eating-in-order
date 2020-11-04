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
                        <Card btn="Delete" source="/assets/images/salad.svg">Caesar Salad</Card>
                    </div>
                </div>
                <div className={classes.nutrient}>
                    <p className={classes.heading}>Nutrient Breakdown</p>
                    <div className={classes.content}>
                        <Card curVal='1700' maxVal='1600' value='1700 kcal' max='1600 kcal' source="/assets/images/calorie.svg">Calories</Card>
                        <Card curVal='30' maxVal='50' value='30 g' max='50g' source="/assets/images/protein.svg">protein</Card>
                        <Card curVal='46' maxVal='40' value='46 g' max='40g' source="/assets/images/carbs.svg">Carbohydrates</Card>
                        <Card curVal='20' maxVal='25' value='20g' max='25g' source="/assets/images/trans-fat.svg">fats</Card>
                        <Card curVal='15' maxVal='26' value='15g' max='26g' source="/assets/images/fiber.svg">fiber</Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard