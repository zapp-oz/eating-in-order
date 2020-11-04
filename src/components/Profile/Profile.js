import React from 'react'

import Sidebar from '../../ui/Sidebar/Sidebar'
import Card from '../../ui/Card/Card'

import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={classes.main}>
            <Sidebar></Sidebar>
            <div className={classes.details}>
                <div className={classes.bar}>
                    <span style={{
                        display: 'block',
                        marginLeft: '100px'
                    }}>
                        About User
                    </span>
                </div>
                <div className={classes.info}>
                    <Card btn="Edit" value='20 years' source='/assets/images/calendar.svg'>age</Card>
                    <Card btn="Edit" value='Male' source='/assets/images/gender.svg'>gender</Card>
                    <Card btn="Edit" value='75 Kgs' source='/assets/images/weight-scale.svg'>weight</Card>
                    <Card btn="Edit" value='175 cm' source='/assets/images/height.svg'>height</Card>
                    <Card btn="Edit" value='20.0' source='/assets/images/bmi.svg'>BMI</Card>
                    <Card btn="Edit" value='-5 Kgs' source='/assets/images/goal.svg'>Goal</Card>
                    <Card btn="Edit" value='30 days' source='/assets/images/hourglass.svg'>Time left</Card>
                    <Card btn="Edit" value='5 days' source='/assets/images/running-shoes.svg'>Activity req. per week</Card>
                </div>
            </div>
        </div>
    )
}

export default Profile