import { useState, useEffect } from 'react';
import Live from './Live';
import AddEvent from './AddEvent';

const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'Muse — Will of the People Tour',
    city: 'Barcelona',
    date: '2025-09-12',
    venue: 'Palau Sant Jordi',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    description: 'Rock simfònic i posada en escena espectacular. Invitats sorpresa.'
  },
  {
    id: 2,
    title: 'Norah Jones — Summer Nights',
    city: 'Girona',
    date: '2025-07-15',
    venue: 'Auditori',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
    description: 'Jazz suau i íntim en un espai perfecte per a la seva veu.'
  },
  {
    id: 3,
    title: 'Zahara — Astronauta',
    city: 'València',
    date: '2025-08-05',
    venue: 'La Marina',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
    description: 'Pop electrònic amb un directe potent i cuidat al detall.'
  }
];

//Funció per carregar de localStorage o inicialitzar amb INITIAL_EVENTS com l'exemple de teoria
const loadFromStorage = () => {
  const storedEvents = localStorage.getItem('events');
  return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
};

const LiveList = () => {
  const [events, setEvents] = useState(loadFromStorage); //Amb loadFromStorage
  const [isSorted, setIsSorted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  //Lectura inicial desde localStorage
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(INITIAL_EVENTS);
    }
  }, []);

  //Escritura automatica a localStorage quan canvien esdeveniments
  useEffect(() => {
      localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

  //Ordena per data
  const handleSort = () => {
    const sortedEvents = [...events].sort((a, b) =>
      new Date(a.date) - new Date(b.date)
    );
    setEvents(sortedEvents);
    setIsSorted(true);
  };

  //Afegeix un esdeveniment
  const handleAddEvent = (newEvent) => {
    setEvents(prevEvents => {
      const maxId = prevEvents.length > 0 ? prevEvents[prevEvents.length - 1].id : 0;
      const newEventWithId = { id: maxId + 1, ...newEvent };
      return [...prevEvents, newEventWithId];
    });
  };

  //Actualitzar un esdeveniment existent
  const handleUpdateEvent = (updatedEvent) => {
    setEvents(prevEvents => 
      prevEvents.map(ev => ev.id === updatedEvent.id ? updatedEvent : ev)
    );
  };

  //Elimina un esdeveniment
  const handleDelete = (id) => {
    setEvents(prevEvents => prevEvents.filter(ev => ev.id !== id));
  };

  return (
    <div className="container mt-5 p-0">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Esdeveniments en viu</h2>
        {/* Boto per ordenar */}
        <button
          className="btn btn-outline-secondary"
          onClick={handleSort}
          disabled={isSorted}
        >
          ↓ Ordena per data
        </button>
      </div>

      {/* Formulari visible/amagat */}
      <AddEvent showForm={showForm} setShowForm={setShowForm} onAdd={handleAddEvent} />

      {/* Renderitza dinamicament la llista d'esdeveniments */}
      <div className="d-flex flex-column p-0">
        {events.map(event => (
          <Live
            key={event.id}
            event={event}
            onUpdate={handleUpdateEvent}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveList;