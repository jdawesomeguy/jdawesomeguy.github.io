import React from 'react'
import './Content.css';

// This component takes in an 'imageSrc' prop and renders an image.
// It is used to display images in the content area of the application.

// The image should be responsive and fit within the content area.

function Content({ imageSrc, text }: { imageSrc?: string, text?: string }) {
    return (
        <div className="content">
            {text && <p className="content-text">{text}</p>}
            {imageSrc && <img src={imageSrc} alt="Content" />}
        </div>
    );
}

export default Content;