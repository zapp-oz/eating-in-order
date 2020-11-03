import React from 'react'
import qs from 'qs'

import { Link, withRouter } from 'react-router-dom'

import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Link to={{
                pathname: '/profile/dashboard'
            }}
            className={classes.active}>
                <div className={classes.container}>
                    <img className={classes.icon} src="/assets/images/dashboard.svg"></img>
                    <span className={classes.label}>dashboard</span>
                </div>
            </Link>
            <Link to={{
                pathname: '/profile/foodSearch'
            }}
            className={classes.active}>
                <div className={classes.container}>
                    <img className={classes.icon} src="/assets/images/magnifying-search-lenses-tool.svg"></img>
                    <span className={classes.label}>search</span>
                </div>
            </Link>
            <Link to={{
                pathname: '/profile'
            }}
            className={classes.active}>
                <div className={classes.container}>
                    <img className={classes.icon} src="/assets/images/profile-avatar.svg"></img>
                    <span className={classes.label}>profile</span>
                </div>
            </Link>
            <Link to={{
                pathname: '/'
            }}
            className={classes.active}>
                <div className={classes.container}>
                    <img className={classes.icon} src="/assets/images/logout.svg"></img>
                    <span className={classes.label}>logout</span>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(Sidebar)