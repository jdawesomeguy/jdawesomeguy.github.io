import React from 'react'
import './Home.css';

import Header from '../Components/Header';
import Content from '../Components/Content';
//import Sidebar from '../Components/Sidebar';
// This is the Home component that serves as the main page of the application.
// It includes the Header and Content components, and can be extended with more features in the future.

import test from '../Components/CompImages/Test.jpg';


function Home() {
    return (
        <div className="home">
            <Header />
            <main>
                {/* <Sidebar/> */}
                <Content imageSrc={test}/>
            </main>
        </div>
    );
}

export default Home;