import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => {
    return(
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/name">NAME</Link>
            </li>
            <li>
                <Link to={{pathname:'support'}}>SUPPORT</Link>
            </li>
            <li>
                <Link to={{pathname:'login'}}>LOGIN</Link>
            </li>
        </ul>
    )
}

