// App.tsx

import React from 'react';
import logo from './logo.svg';
import { Hello } from './components/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>          
          <Route path="/about" element={<About/>}></Route>          
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;