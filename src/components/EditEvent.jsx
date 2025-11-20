import { useState } from 'react';

const EditEvent = ({ event, onCancel, onUpdate }) => {
  const [formData, setFormData] = useState({ ...event });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded mb-4">
      <div className="d-flex justify-content-between align-items-center p-2 bg-body-secondary text-black rounded-top mb-2">
        <p className="mb-0 fw-bold ms-2">Editar esdeveniment</p>
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-sm"
          onClick={onCancel}
        >
          Tanca
        </button>
      </div>

      {/* Camps del formulari */}
      <div className="row mb-2 p-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Títol</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="city" className="form-label">Ciutat</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="date" className="form-label">Data</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
        </div>
      </div>

      <div className="row mb-2 p-3">
        <div className="col-md-6">
          <label htmlFor="venue" className="form-label">Espai / Sala</label>
          <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">URL Imatge</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="form-control" />
        </div>
      </div>

      <div className="row mb-3 p-3">
        <div className="col-12">
          <label htmlFor="description" className="form-label">Descripció</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" />
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-end mb-3 me-3">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel·lar</button>
        <button type="submit" className="btn btn-primary">Desa canvis</button>
      </div>
    </form>
  );
};

export default EditEvent;