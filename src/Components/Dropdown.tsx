import React from 'react'
import './Dropdown.css';

import { useNavigate } from 'react-router-dom';

function Dropdown({ title}: { title: string}) {
    const navigate = useNavigate();

    function handleDropdownClick() {
        navigate(`/${title}`);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={handleDropdownClick}>{title}</button>
        </div>
    );

}

export default Dropdown;