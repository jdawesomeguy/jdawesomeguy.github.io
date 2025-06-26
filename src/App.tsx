import React from 'react';
import './App.css';
// This is the main App component that renders the application.
import Header from './Components/Header';
import Content from './Components/Content';
import test from './Components/CompImages/Test.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content imageSrc={test} />
      </main>
    </div>
  );
}

export default App;
