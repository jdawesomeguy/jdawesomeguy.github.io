import React from 'react'

import Header from '../Components/Header';
import Content from '../Components/Content';
// import Sidebar from '../Components/Sidebar';

import dog from '../Components/CompImages/Test.jpg';

function Pictures() {
    return (
        <div className="projects">
            <Header />
            <main>
                {/* <Sidebar/> */}
                <Content imageSrc={dog} text="Congrats! You've reached the Pictures tab. Putting this here so I can actually see the routing I've been working on for this webbed site." />
            </main>
        </div>
    );
}

export default Pictures;