import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";  // Importa o idioma português para o moment.js
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "./navbar";

// Define o idioma para português
moment.locale("pt-br");

// Configura o localizador do calendário com moment.js
const localizer = momentLocalizer(moment);

function Agenda() {
  const [events, setEvents] = useState([
    {
      title: "Forró do Titão",
      start: new Date(2024, 9, 26, 18, 0),
      end: new Date(2024, 9, 26, 21, 0),
      allDay: false,
    },
    {
      title: "Bar da Loira",
      start: new Date(2024, 9, 27, 19, 0),
      end: new Date(2024, 9, 27, 22, 0),
      allDay: false,
    },
    {
      title: "Arretados Piseiro",
      start: new Date(2024, 9, 30, 20, 0),
      end: new Date(2024, 9, 30, 23, 0),
      allDay: false,
    },
  ]);

  return (
    <div className="app-layout">
      {/* Navbar persistente */}
      <Navbar />
  
      <div className="agenda">
        {/* Cabeçalho */}
        <div className="header">
          <h1>AGENDA</h1>
          <button className="create-event-btn"><h3>Criar Novo Evento</h3></button>
        </div>
  
        {/* Próximos eventos */}
        <div className="upcoming-events">
          <h3>Próximos eventos</h3>
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event.title}</li>
            ))}
          </ul>
        </div>
  
        {/* Calendário usando react-big-calendar */}
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
  
}

export default Agenda;
