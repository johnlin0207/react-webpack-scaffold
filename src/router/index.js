import React from 'react';
import App from '../pages/App';
import Todolist from '../pages/Todolist';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

class WebRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={App}/>
                    <Route path='/todolist' component={Todolist}/>
                    {/* <Route path='/login' component={Login}/>*/}
                    {/*<PrivateRoute />*/}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default WebRouter