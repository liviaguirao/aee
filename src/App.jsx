import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/navbar'; // Navbar
import "./App.css"; // Certifique-se de que esse arquivo tem os estilos corretos
import Agenda from "./components/Agenda"

// Função principal do App
function App() {
  return (
    <Router>
      <div className="app-layout" style={{ display: 'flex' }}>
        {/* Navbar persistente */}
        <Navbar />

        {/* Exibe a Agenda ao lado da Navbar */}
        <div style={{ flexGrow: 1 }}>
          <Agenda />
        </div>
      </div>
    </Router>
  );
}

export default App;
