import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <small>By Noor Ullah</small>
        </header>
    )
}

export default Header;