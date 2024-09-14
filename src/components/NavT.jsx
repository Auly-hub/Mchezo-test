// NavT.js
import React, { useState } from "react";
import '../components/NavT.scss';
import { NavLink } from 'react-router-dom';
import logoImages from '../assets/img/what we do/1nSp5qC3QtRy4kF4uTbGKdmI.png';
import barsIcon from '../assets/img/icons8-menu-30.png';
import timesIcon from '../assets/img/icons8-multiply-24.png';

const NavT = () => {
    const [menu, setMenu] = useState('About us');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Navbar2">
            <div className='logo'>
                <NavLink to="/home">
                    <img src={logoImages} alt="Logo" />
                </NavLink>
            </div>
            <div className={`Nav-menu2 ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className='NavLink2'>
                        <NavLink 
                            to="/aboutus" 
                            onClick={() => setMenu('About us')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            About us
                        </NavLink>
                    </li>
                    <li className='NavLink2'>
                        <NavLink 
                            to="/whatwedo" 
                            onClick={() => setMenu('What we do')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            What we do
                        </NavLink>
                    </li>
                    <li className='NavLink2'>
                        <NavLink 
                            to="/betpawa" 
                            onClick={() => setMenu('BetPawa')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            BetPawa
                        </NavLink>
                    </li>
                    <li className='NavLink2'>
                        <NavLink 
                            to="/contact" 
                            onClick={() => setMenu('Contact')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className='NavLinkButton2'>
                        <NavLink 
                            to="/news"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                        <button className="NavLinkButton">
                            News
                        </button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='menu-icon' onClick={toggleMenu}>
                <img src={isOpen ? timesIcon : barsIcon} alt="Menu Icon" />
            </div>
        </div>
    );
};

export default NavT;
