import React from 'react'
import Dropdown from './Dropdown';
import ProfileImage from './ProfileImage';
import chip from './CompImages/Chip.svg';
import './Header.css';

// This component organizes the components at the top of the page.
// It will contain three dropdown components (Projects, Writings, and Assorted Ideas) along with a Profile component.
function Header() {
    return (
        <header className="header">
            <img src={chip} alt="Logo" className="logo"/>
            <nav className="nav">
                <Dropdown title="Projects"/>
                <Dropdown title="Writings"/>
                <Dropdown title="Pictures"/>
            </nav>
            <ProfileImage />
        </header>
    );
}

export default Header;