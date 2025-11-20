import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventNotFound from "./EventNotFound";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/events/${id}`);
        if (!res.ok) throw new Error("Esdeveniment no trobat");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div>Carregant...</div>;
  if (error) return <EventNotFound />;

  return (
    <div className="container mt-4 p-0">
      {/* Boto per tornar a la llista */}
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate('/events')}
      >
        &larr; Tornar a la llista
      </button>

      <div className="card shadow-sm">
        {/* Imatge partida a la mitad */}
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              display: "block"
            }}
          />
        )}

        {/* Contingut padding */}
        <div className="card-body pt-3 px-3">
          <h4 className="card-title mb-2 fw-bold">{event.title}</h4>
          <p className="mb-2 text-muted">{event.city} - {event.date}</p>
          <p className="mb-2">Sala: <strong>{event.venue}</strong></p>
          <p className="mb-0">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;