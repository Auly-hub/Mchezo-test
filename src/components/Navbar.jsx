import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../components/Navbar.scss";
import logoImage from '../assets/img/mchozo/TI0NwoDeUmFF69O5E1wtJIQdds.png';
import barsIcon from '../assets/img/icons8-menu-24.png';
import timesIcon from '../assets/img/icons8-multiply24.png';

const Navbar = () => {
    const [menu, setMenu] = useState('About us');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Navbar'>
            <div className='logo'>
                <NavLink to="/home">
                    <img src={logoImage} alt="Logo" />
                </NavLink>
            </div>
            <div className={`Nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className='NavLink'>
                        <NavLink 
                            to="/aboutus" 
                            onClick={() => setMenu('About us')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            About us
                        </NavLink>
                    </li>
                    <li className='NavLink'>
                        <NavLink 
                            to="/whatwedo" 
                            onClick={() => setMenu('What we do')}
                            className={(nav) => (nav.isActive ?  "nav-active" : "")}
                        >
                            What we do
                        </NavLink>
                    </li>
                    <li className='NavLink'>
                        <NavLink 
                            to="/betpawa" 
                            onClick={() => setMenu('BetPawa')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                        
                            BetPawa
                        </NavLink>
                    </li>
                    <li className='NavLink'>
                        <NavLink 
                            to="/contact" 
                            onClick={() => setMenu('Contact')}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                        
                            Contact
                        </NavLink>
                    </li>
                    <li className='NavLinkButton'>
                        <NavLink 
                            to="/news"
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                        <button className='ButtonNav'>
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

export default Navbar;
