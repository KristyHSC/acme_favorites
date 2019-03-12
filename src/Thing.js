import React, {Component} from 'react'
import axios from 'axios'
// const {User, Thing, Favorites} = require('../db')

export default class Things extends Component {
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
            <div>
                {
                    this.state.things.map(thing => (
                        <div key={thing.id}>
                            <li>{thing.name}</li>
                            <ul>{
                                this.state.users.filter(user => (
                                    this.state.favorites.filter(favorite => (favorite.thingId === thing.id)))
                                    .reduce((acc, favor) => {
                                        acc.push(favor.userId)
                                        return acc
                                    },[ ])
                                    .includes(user.id))
                                    .map(user => (
                                        <div key={user.id}>
                                            <li>favorite by: {user.name}</li>
                                        </div>
                                    ))
                            }</ul>
                        </div>
                    ))
                }
            </div>
        )
    }
}