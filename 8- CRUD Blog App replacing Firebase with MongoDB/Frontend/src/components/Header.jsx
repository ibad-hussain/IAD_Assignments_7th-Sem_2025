import React from "react";
import avatar from '../assets/avatar.jpg';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header-main'>
            <a href="/"><div className="header-title">Blog Hub</div></a>
            <img src={avatar} alt="" />
        </div>
    )
}

export default Header
