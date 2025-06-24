import React from 'react'
import './Sidebar.css';

// This component renders a sidebar with the section title and a list of projects, writings, or assorted ideas.
// It takes in two props: section_title and section_items, where section_items is an array (for now).
function Sidebar({ section_title, section_items }: { section_title: string, section_items: string[] }) {
    // Next step: Each item should be clickable and display the content in the main area.
  return (
    <div className="sidebar">
      <h2>{section_title}</h2>
      <ul>
        {section_items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar