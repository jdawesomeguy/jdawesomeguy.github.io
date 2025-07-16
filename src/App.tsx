import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Writing from './Pages/Writing';
import Pictures from './Pages/Pictures';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define routes for the dropdown items, replace component when it is created. */}
          <Route path="/Projects" element={<Home />} />
          <Route path="/Writings" element={<Writing />} />
          <Route path="/Pictures" element={<Pictures />} />
          {/* Additional routes can be added here */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
