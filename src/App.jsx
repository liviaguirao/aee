import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"; // Arquivo de estilos separado


const Agenda = () => {
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
      <div className="sidebar">
        <div className="profile">
          <img src="profile-pic-url" alt="Perfil" className="profile-pic" />
        </div>
        <nav className="menu">
          <button className="menu-btn">Home</button>
          <button className="menu-btn">Agenda</button>
          <button className="menu-btn">Configurações</button>
        </nav>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>AGENDA</h1>
          <button className="create-event-btn">Criar Novo Evento</button>
        </div>

        <div className="calendar-controls">
          <button onClick={handlePrevMonth}>{"<"}</button>
          <span>{`Mês de ${currentYear}`}</span>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>

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

        <div className="upcoming-events">
          <h3>Próximos eventos</h3>
          <ul>
            <li>Forró do Titão</li>
            <li>Bar da Loira</li>
            <li>Arretados Piseiro</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Agenda;