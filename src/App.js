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

//If we don't do the component part we can do this in one piece. 

/*

Check out prof's answer to see how he has done this differently. 

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            things: [],
            favorites: []
        }
    }

    componentDidMount(){
        axios.get('/api/things')
            .then(response => this.setState({things: response.data}))
            .then(() => axios.get('/api/users'))
            .then(resp => this.setState({users: resp.data}))
            .then(() => axios.get('/api/favorites'))
            .then(resp => this.setState({favorites: resp.data}))
            .catch(error => console.log(error))
    }


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

*/