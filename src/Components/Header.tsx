import React from 'react'
import Dropdown from './Dropdown';
import ProfileImage from './ProfileImage';
import './Header.css';

// This component organizes the components at the top of the page.
// It will contain three dropdown components (Projects, Writings, and Assorted Ideas) along with a Profile component.
function Header() {
    const projects = ['Project 1', 'Project 2', 'Project 3'];
    const writings = ['Writing 1', 'Writing 2', 'Writing 3'];
    const assortedIdeas = ['Idea 1', 'Idea 2', 'Idea 3'];

    return (
        <header className="header">
            <nav className="nav">
                <Dropdown title="Projects" items={projects} />
                <Dropdown title="Writings" items={writings} />
                <Dropdown title="Assorted Ideas" items={assortedIdeas} />
                <ProfileImage />
            </nav>
        </header>
    );
}