import React from 'react'
import './Content.css';

// This component takes in an 'imageSrc' prop and renders an image.
// It is used to display images in the content area of the application.

// The image should be responsive and fit within the content area.

function Content({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="content">
            <img src={imageSrc} alt="Content" />
        </div>
    );
}

export default Content;