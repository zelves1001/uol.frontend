import React from 'react';
import "./style.css";
import Logo from './assets/logo.svg';

export default function Header() {
    return(
        <div>
            <img src={Logo} alt="" />
        </div>
    );
}