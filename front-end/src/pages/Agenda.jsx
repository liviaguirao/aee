import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br"; // Importa o idioma português para o moment.js
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../components/navbar";
import "../styles/agenda.css";

// Define o idioma para português
moment.locale("pt-br");

// Configura o localizador do calendário com moment.js
const localizer = momentLocalizer(moment);
const messages = {
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  allDay: 'Dia Todo',
  week: 'Semana',
  work_week: 'Semana de Trabalho',
  day: 'Dia',
  month: 'Mês',
  previous: 'Anterior',
  next: 'Próximo',
  yesterday: 'Ontem',
  tomorrow: 'Amanhã',
  today: 'Hoje',
  agenda: 'Agenda',
  noEventsInRange: 'Não há eventos neste período.',
  showMore: total => `+ Ver mais (${total})`,

  // Traduções para os dias da semana (abreviações e nomes completos)
  sunday: 'Domingo',
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
  sun: 'Dom',
  mon: 'Seg',
  tue: 'Ter',
  wed: 'Qua',
  thu: 'Qui',
  fri: 'Sex',
  sat: 'Sáb',

  // Traduções para os meses (abreviações e nomes completos)
  january: 'Janeiro',
  february: 'Fevereiro',
  march: 'Março',
  april: 'Abril',
  may: 'Maio',
  june: 'Junho',
  july: 'Julho',
  august: 'Agosto',
  september: 'Setembro',
  october: 'Outubro',
  november: 'Novembro',
  december: 'Dezembro',
  jan: 'Jan',
  feb: 'Fev',
  mar: 'Mar',
  apr: 'Abr',
  jun: 'Jun',
  jul: 'Jul',
  aug: 'Ago',
  sep: 'Set',
  oct: 'Out',
  nov: 'Nov',
  dec: 'Dez'
};

const formats = {
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'dddd', culture), // Exibe "Domingo", "Segunda", etc.
  weekdayFormat: (date, culture, localizer) =>
    localizer.format(date, 'ddd', culture),  // Exibe "Dom", "Seg", etc.
  monthHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, 'MMMM YYYY', culture), // Exibe "Outubro 2024", etc.
  agendaHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, 'MMMM YYYY', culture), // Exibe "Agenda de Outubro", etc.
};

function Agenda() {
  const [hoveredEventId, setHoveredEventId] = useState(null);
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

  const [showCreateEventModal, setShowCreateEventModal] = useState(false); // Estado para o modal
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" }); // Estado para o novo evento

  // Função para redefinir o formulário
  const resetForm = () => {
    setNewEvent({ title: "", start: "", end: "" });
  };

  // Função para abrir o modal
  const handleCreateEventClick = () => {
    resetForm(); // Limpa o formulário ao abrir o modal
    setShowCreateEventModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowCreateEventModal(false);
  };

  // Função para adicionar um novo evento
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, {
        title: newEvent.title,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
        allDay: false
      }]);
      handleCloseModal(); // Fecha o modal após adicionar o evento
    } else {
      alert("Preencha todos os campos.");
    }
  };

  const eventStyleGetter = (event) => {
    const isHovered = event.id === hoveredEventId;
    const backgroundColor = isHovered ? "#FF5400" : event.color || "#820B8A";
    return {
      style: {
        backgroundColor,
        color: "white", // Cor do texto dentro do evento
        borderRadius: "10px",
        border: "none",
        transition: "background-color 0.3s ease", // Suaviza a transição da cor ao passar o mouse
      },
    };
  };

  return (
    <div className="app-layout">
      {/* Navbar persistente */}
      <Navbar />

      <div className="agenda">
        {/* Cabeçalho */}
        <div className="header-agenda">
          <h1>AGENDA</h1>
          <button className="create-event-btn" onClick={handleCreateEventClick}>
            <h3>
              Criar Novo <br /> Evento
            </h3>
          </button>
        </div>

        {/* Próximos eventos */}
        <div className="upcoming-events">
          <h5>Próximos eventos</h5>
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
            culture={"pt-BR"}
            style={{ height: "100%" }}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={(event) => alert(event.title)} // Exemplo de ação no clique
            onMouseOver={(event) => setHoveredEventId(event.id)} // Define o evento ao passar o mouse
            onMouseOut={() => setHoveredEventId(null)} // Reseta o hover ao tirar o mouse
            messages={messages}
            formats={formats}
          />
        </div>

        {/* Modal para criar novo evento */}
        {showCreateEventModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Criar Novo Evento</h2>
              <label>
                Título:
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
              </label>
              <label>
                Data de Início:
                <input
                  type="datetime-local"
                  value={newEvent.start}
                  onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                />
              </label>
              <label>
                Data de Fim:
                <input
                  type="datetime-local"
                  value={newEvent.end}
                  onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                />
              </label>
              <button onClick={handleAddEvent}>Adicionar Evento</button>
              <button onClick={handleCloseModal}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Agenda;
