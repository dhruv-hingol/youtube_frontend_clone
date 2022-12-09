import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return ( 
        <>
          <Router >
            <Navbar />
            <Sidebar />
            <Routes >
              <Route exact path = "/" element={<Home />}/>    
            </Routes >  
          </Router>     
        </>
    );
}

export default App;

