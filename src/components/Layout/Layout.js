import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'
import Search from '../Search/Search'
import SignUp from '../SignUp/SignUp'

const Layout = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/signup' component={SignUp}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/profile' exact component={Profile}></Route>
                <Route path='/profile/dashboard' component={Dashboard}></Route>
                <Route path='/profile/foodSearch' component={Search}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Layout