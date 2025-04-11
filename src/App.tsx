// App.tsx

import React from 'react';
import logo from './logo.svg';
import { Hello } from './components/Hello';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';
import { Login } from './pages/Login';
import { Registros } from './pages/Registros';
import { NovoLancamento } from './components/NovoLancamento';
import { EditarRegistro } from './components/EditarRegistro';
import { ExcluirRegistro } from './components/ExcluirRegistro';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Nav />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registros" element={<Registros />} />
            <Route path="/novolancamento" element={<NovoLancamento />} />
            <Route path="/editarreg" element={<EditarRegistro />} />
            <Route path="/excluirreg" element={<ExcluirRegistro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;