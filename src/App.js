import React from 'react'
import {HashRouter, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Users from './Users'
import Things from './Thing'

export default class App extends React.Component {
    render() {
        return (
        <HashRouter>
            <div id='main'>
                <div className='column container'>
                    <div id='header'>
                        <h1>Acme Favorites</h1>
                    </div>
                    <Navbar />
                </div>
                <Route exact path='/' component={Users} />
                <Route exact path='/api/users' component={Users} />
                <Route exact path='/api/things' component={Things} />
            </div>
        </HashRouter>
        )
    }
}
