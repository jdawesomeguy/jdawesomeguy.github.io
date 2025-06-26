import React from 'react'
import './Dropdown.css';

function Dropdown({ title, items }: { title: string, items: string[] }) {

    function handleDropdownClick() {
        // Next step: This will toggle the visibility of the dropdown items.
        // For now, it will just log a message to the console.
        console.log(`Dropdown ${title} clicked`);
    }

    function handleItemClick(item: string) {
        // Next step: This should change the content in the Sidebar and change the content pane to the default item
        // For now, it will just log the clicked item to the console.
        console.log(`Clicked on ${item}`);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={handleDropdownClick}>{title}</button>
            <div className="dropdown-content">
                {items.map((item, index) => (
                    <a key={index} href={title} onClick={() => handleItemClick(item)}>
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );

}

export default Dropdown;