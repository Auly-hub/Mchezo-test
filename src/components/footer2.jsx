import "../components/footer2.scss";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/img/mchozo/TI0NwoDeUmFF69O5E1wtJIQdds.png';
import icon1 from '../assets/img/icons8-twitter-logo-30.png';
import icon2 from '../assets/img/icons8-linkedin-logo-32.png';
import icon3 from '../assets/img/icons8-instagram-logo-30.png';

const Footer2 = () => {
  const [menu, setMenu] = useState('About us');
  return (
    <section className="footer2-section">
      <div className="footer2_container">
        <div className="logo">
          <NavLink to="/home">
            <img src={img1} alt="Logo" />
          </NavLink>
        </div>
        <div className='Nav-menu3'>
          <ul>
            <li className='NavLink3'>
              <NavLink
                to="/aboutus"
                onClick={() => setMenu('About us')}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                About us
              </NavLink>
            </li>
            <li className='NavLink3'>
              <NavLink
                to="/whatwedo"
                onClick={() => setMenu('What we do')}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                What we do
              </NavLink>
            </li>
            <li className='NavLink3'>
              <NavLink
                to="/betpawa"
                onClick={() => setMenu('BetPawa')}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                BetPawa
              </NavLink>
            </li>
            <li className='NavLink3'>
              <NavLink
                to="/contact"
                onClick={() => setMenu('Contact')}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li className='NavLink3'>
              <NavLink
                to="/news"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                News
              </NavLink>
            </li>

            <p className="mb-lb-5">Company no: 120813966 / Address: Nyarugenge, City of Kigali, Rwanda © 2023 Mchezo, All rights reserved.</p>
          </ul>
        </div>
      </div>
      <div className="social3">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={icon1} width="25px" alt="Twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={icon2} width="25px" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={icon3} width="25px" alt="Instagram" />
        </a>
      </div>
    </section>
  );
}

export default Footer2;
