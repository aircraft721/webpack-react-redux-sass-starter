import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>
            <NavLink activeClassName='is-active' to='/test'>Test</NavLink>
            <NavLink activeClassName='is-active' to='/contact'>Contact</NavLink>
        </header>
    );
}
export default Header;