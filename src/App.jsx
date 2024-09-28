import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"; // Certifique-se de que esse arquivo tem os estilos corretos
import Agenda from "./components/Agenda"

// Função principal do App
function App() {
  return (
    <Router>
        {/* Exibe a Agenda ao lado da Navbar */}
        <div style={{ flexGrow: 1 }}>
          <Agenda />
        </div>
    </Router>
  );
}

export default App;
