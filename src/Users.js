import React, {Component} from 'react'
import axios from 'axios'


export default class Users extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            favorites: [],
            things: []
        }
    }

    async componentDidMount(){
        try {
            const usersResponse = await axios.get('/api/users')
            this.setState({users: usersResponse.data})
            const thingsResponse = await axios.get('/api/things')
            this.setState({things: thingsResponse.data})
            const favoritesResp = await axios.get('/api/favorites')
            this.setState({favorites: favoritesResp.data})
            
        }
        catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user=> (
                        <div key={user.id}>
                            <li>{user.name}</li>
                            <ul>{
                                this.state.things.filter(thing => (this.state.favorites.filter(favorite => (favorite.userId === user.id)))
                                    .reduce((acc, favor) => {
                                        acc.push(favor.thingId)
                                        return acc
                                    },[ ])
                                    .includes(thing.id))
                                    .map(thing => (
                                        <div key={thing.id}>
                                            <li>{thing.name} (Ranked: {this.state.favorites.filter(favorite => (favorite.thingId === thing.id))[0].rank})</li>
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