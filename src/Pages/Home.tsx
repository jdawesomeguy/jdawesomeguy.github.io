import React from 'react'
import Header from '../Components/Header';
import Content from '../Components/Content';
//import Sidebar from '../Components/Sidebar';
// This is the Home component that serves as the main page of the application.
// It includes the Header and Content components, and can be extended with more features in the future.

import working from '../Components/CompImages/InProgress.jpg';


function Home() {
    return (
        <div className="home">
            <Header />
            <main>
                {/* <Sidebar/> */}
                <Content imageSrc={working} text="Welcome to my personal site in progress. My name is James and this is where I'm intermittently learning more about Typescript and React. Still planning out the structure and content of this website, but enjoy what's here while it lasts."/>
            </main>
        </div>
    );
}

export default Home;