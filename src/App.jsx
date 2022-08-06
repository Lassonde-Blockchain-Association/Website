import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';

function App() {
  return (
      // <div className='App'>
      //   <h1>Hi LBC</h1>
      // </div>
    <Router>    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
