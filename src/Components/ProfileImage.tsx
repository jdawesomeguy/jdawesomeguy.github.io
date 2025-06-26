import React from 'react'
import './ProfileImage.css';
import profile from './CompImages/Profile.jpg';

// This component renders a profile image as a button.
// It takes in a prop `imageSrc` which is the source of the profile image.

function ProfileImage() {

    function handleProfileClick() {
        // In the future, I want this to randomly spawn a message or little effect around the profile image.
        // For now, it will just log a message to the console.
        console.log('Profile image clicked');
    }

    return (
        <img
        src = {profile} // Use the imported profile image
        alt="Profile"
        className="profile-image-button" // Apply combined styles here
        onClick={handleProfileClick} // Replace with your actual click handler
        />
    );
}

export default ProfileImage;