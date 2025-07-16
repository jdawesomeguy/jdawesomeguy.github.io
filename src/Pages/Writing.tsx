import React from 'react'

import Content from '../Components/Content';
import Header from '../Components/Header';
// import Sidebar from '../Components/Sidebar';

import Wells from '../Components/CompImages/ThreeWells.jpg';

function Writing() {

    const page_text = "Well Well Well! Look what the internet dragged in! If you are a robot you have to tell me. If you aren't a robot, this will be where I put any writing blurbs that I write that I think are interesting. In the mean time, enjoy this placeholder text. And this picture of a well.";

    return (
        <div className="writing">
            <Header />
            <main>
                {/* <Sidebar/> */}
                <Content imageSrc={Wells} text={page_text} />
            </main>
        </div>
    );
}

export default Writing;