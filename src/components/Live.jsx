import { useState } from 'react';
import EditEvent from './EditEvent';

const Live = ({ event, onDelete, onUpdate}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleConfirmDelete = () => {
    setShowModal(false);
    onDelete(event.id);
  };

  const handleUpdateFromEdit = (updatedData) => {
    setIsEditing(false);
    onUpdate && onUpdate(updatedData);
  };

  return (
    <>
      <div className="card shadow-sm">
        {/* Fila resumida */}
        <div className="card-body d-flex justify-content-between align-items-center p-3">
          <div>
            <h5 className="card-title mb-1 fw-bold">{event.title}</h5>
            <p className="mb-0 text-muted">{event.city} - {event.date}</p>
          </div>

          <div className="d-flex gap-2">
            {/* Boto tancar/veure */}
            <button
              type="button" className={`btn btn-sm ${isExpanded ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Tancar' : 'Veure fitxa'}
            </button>

            {/* Boto editar */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary" onClick={() => setIsEditing(true)}>
              Editar
            </button>

            {/* Boto esborra */}
            <button
              type="button" className="btn btn-sm btn-outline-danger" onClick={() => setShowModal(true)}>
              Esborrar
            </button>
          </div>
        </div>
        {/* Fila completa al donar al boto veure */}
        {isExpanded && (
          <div className="card-body border-top pt-3 p-3">
            <img src={event.image} className="img-fluid rounded mb-3" style={{ height: "340px", width: "100%", objectFit: "cover" }} alt={event.title} />{/*Posso l'estil aquet perque es retalli l'imatge aixi queda com l'exemple del profe*/}
            <h5 className="card-title mb-2 fw-bold">{event.title}</h5>
            <p className="mb-2 text-muted">{event.city} - {event.date}</p>
            <p className="mb-2">Sala: <strong>{event.venue}</strong></p>
            <p className="fw-bold mb-0">{event.description}</p>
          </div>
        )}

        {/* Formulari d'editar */}
        {isEditing && (
          <EditEvent
            event={event}
            onCancel={() => setIsEditing(false)}
            onUpdate={handleUpdateFromEdit}
          />
        )}
      </div>

      {/* Modal bootstrap de confirmació esborrar*/}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fw-bold">Confirmar esborrament</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
                <p>Segur que vols esborrar <span className="fw-bold">"{event.title}"</span>?</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel·lar
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Esborra
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Live;