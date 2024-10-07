import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Gatos from './Gatos';
import Categoria from './Categoria';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/usuario">Usuario</Link></li>
          <li><Link to="/Gatos">Gatos</Link></li>
          <li><Link to="/Categorias">Categorias API biblioteca</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/"  element={<Inicio/>} />
        <Route path="/about"  element={<AcercaDe/>} />
        <Route path="/contact" element={<Contacto/>} />
        <Route path="/usuario" element={<Usuarios/>} />
        <Route path="/gatos" element={<Gatos/>} />
        <Route path="/categorias" element={<Categoria/>} />
      </Routes>
    </Router>
  );
}

export default App;
