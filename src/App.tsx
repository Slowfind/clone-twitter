import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Signin } from './pages/SignIn/Signin'

export const App: React.FC = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/home" component={Home} />
            </Switch>
        </div>
    )
}
