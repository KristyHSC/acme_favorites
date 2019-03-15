import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='nav' className='nav nav-pills'>
            <Link to='/api/users'>users 4</Link>
            <Link to='/api/things'>things 5</Link>
        </div>
    )
}

export default Navbar;