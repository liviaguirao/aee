import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/navbar'; // Navbar
import "./App.css"; // Certifique-se de que esse arquivo tem os estilos corretos

// Componente Agenda
function Agenda() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <div className="day" key={i}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="agenda">
      {/* Cabeçalho */}
      <div className="header">
        <h1>AGENDA</h1>
        <button className="create-event-btn">Criar Novo Evento</button>
      </div>

      {/* Controles do calendário */}
      <div className="calendar-controls">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <span>{`Mês de ${currentYear}`}</span>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      {/* Exibição do calendário */}
      <div className="calendar">
        <div className="calendar-header">
          <div>DOM</div>
          <div>SEG</div>
          <div>TER</div>
          <div>QUA</div>
          <div>QUI</div>
          <div>SEX</div>
          <div>SAB</div>
        </div>
        <div className="calendar-days">{renderDays()}</div>
      </div>

      {/* Próximos eventos */}
      <div className="upcoming-events">
        <h3>Próximos eventos</h3>
        <ul>
          <li>Forró do Titão</li>
          <li>Bar da Loira</li>
          <li>Arretados Piseiro</li>
        </ul>
      </div>
    </div>
  );
}

// Função principal do App
function App() {
  return (
    <Router>
      <div className="app-layout" style={{ display: 'flex' }}>
        {/* Navbar persistente */}
        <Navbar />

        {/* Exibe a Agenda ao lado da Navbar */}
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Agenda />
        </div>
      </div>
    </Router>
  );
}

export default App;
