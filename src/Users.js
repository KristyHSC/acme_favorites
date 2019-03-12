import React, {Component} from 'react'
import axios from 'axios'

export default class Users extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            things: []
        }
    }

    async componentDidMount(){
        try {
            const usersResponse = await axios.get('/api/users')
            this.setState({users: usersResponse.data})
            const thingsResponse = await axios.get('/api/things')
            this.setState({things: thingsResponse.data})
            
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
                            <ul>{this.state.things.map(thing=>(
                                <li>{thing.name}{thing.id}</li>
                            ))}</ul>
                        </div>
                    ))
                }
            </div>
        )
    }
}   