import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div id='navbar' className='row'>
            <Link to='/api/users'>users 4</Link>
            <Link to='/api/things'>things 5</Link>
        </div>
    )
}

export default Navbar;