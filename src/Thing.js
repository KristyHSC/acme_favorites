import React, {Component} from 'react'
import axios from 'axios'
// const {User, Thing, Favorites} = require('../db')

export default class Things extends Component {
    constructor() {
        super()
        this.state = {
            things: []
        }
    }

    componentDidMount(){
        axios.get('/api/things')
            .then(response => this.setState({things: response.data}))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {
                    this.state.things.map(thing => (
                        <div key={thing.id}>
                            <li>{thing.name}</li>
                        </div>
                    ))
                }
            </div>
        )
    }
}