// App.tsx

import React from 'react';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Login } from './pages/Login/Login';
import { Registros } from './pages/Registros/Registros';
import { NovoLancamento } from './components/NovoLancamento/NovoLancamento';
import { EditarRegistro } from './components/EditarRegistro/EditarRegistro';
import { ExcluirRegistro } from './components/ExcluirRegistro/ExcluirRegistro';
import { Spinner } from './components/Spinner/Spinner';
import { Card } from './components/Card/Card';

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