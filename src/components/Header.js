import React, { useState } from 'react';
import "../styles/header.css";

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
   

    return(
        <div className='header-container'>
            <header className='header'>
                <img src="images/Logo.png" alt="logo" className='header-logo' />
                <div className='text-title'>
                    <h1 className="NGO-title">
                        <span className="green">Tanmay</span>
                        <span className="red">Development</span>
                        <span className="green">Foundation</span>
                    </h1>
                </div>
            </header>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li
                        className='dropdown'
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a href='/' className='dropdown-toggle'>
                            Function Areas {showDropdown ? "▲" : "▼"}
                        </a>
                        {showDropdown && (
                            <ul className='dropdown-menu'>
                                <li><a href='/Education'>1.Education</a></li>
                                <li><a href='/Women-Empowerment'>2.Women Empowerment</a></li>
                                <li><a href='/Environment'>3.Environment</a></li>
                                <li><a href='/Agriculture'>4.Agriculture</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/About-Us">Media</a></li>
                    <li><a href="/Mode-Transaction">Donation</a></li>
                </ul>
            </nav>
            </div>
    );
}
export default Header; 