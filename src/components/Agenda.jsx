import React, { useState } from "react";

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

  export default Agenda;