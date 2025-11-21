import { useState } from 'react';

const INITIAL_FORM = {
  title: '',
  city: '',
  date: '',
  venue: '',
  image: '',
  description: ''
};

const AddEvent = ({ showForm, setShowForm, onAdd }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await onAdd(formData); //onAdd ara es async
      setFormData(INITIAL_FORM);
      setShowForm(false);
    } catch (err) {
      console.error("Error creant event:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      {showForm && (
        <form onSubmit={handleSubmit} className="border rounded">
          <div className="d-flex justify-content-between align-items-center p-2 bg-body-secondary text-black rounded-top mb-2">
            <p className="mb-0 fw-bold ms-2">Nou esdeveniment</p>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setShowForm(false)}
            >
              Tanca
            </button>
          </div>

          {/* Camps del formulari */}
          <div className="row mb-2 p-3">
            <div className="col-md-6">
              <label className="form-label">Títol</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Ciutat</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Data</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
            </div>
          </div>

          <div className="row mb-2 p-3">
            <div className="col-md-6">
              <label className="form-label">Espai / Sala</label>
              <input type="text" name="venue" value={formData.venue} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">URL Imatge</label>
              <input type="text" name="image" value={formData.image} onChange={handleChange} className="form-control" />
            </div>
          </div>

          <div className="row mb-3 p-3">
            <div className="col-12">
              <label className="form-label">Descripció</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" />
            </div>
          </div>

          <div className="d-flex gap-2 justify-content-end mb-3 me-3">
            <button type="button" className="btn btn-secondary" onClick={() => setFormData(INITIAL_FORM)}>Netejar</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Guardant...' : 'Guardar'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddEvent;

//-------------------------------------------------------------------------------------------------------------------------------------------
//APARTAT FINS EL PUNT 5 AMB LOCALSTORAGE
//-------------------------------------------------------------------------------------------------------------------------------------------
// import { useState } from 'react';

// const INITIAL_FORM = {
//   title: '',
//   city: '',
//   date: '',
//   venue: '',
//   image: '',
//   description: ''
// };

// const AddEvent = ({ showForm, setShowForm, onAdd }) => {
//   const [formData, setFormData] = useState(INITIAL_FORM);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd(formData);
//     setFormData(INITIAL_FORM);
//     setShowForm(false); // Tanca el formulari
//   };

//   return (
//     <div className="mb-4">
//       <div className="d-flex justify-content-end">
//         <button 
//           className="btn btn-primary mb-2"
//           onClick={() => setShowForm(!showForm)}
//         >
//           {showForm ? 'Amagar formulari' : 'Nou esdeveniment'}
//         </button>
//       </div>

//       {showForm && (
//         <form onSubmit={handleSubmit} className="border rounded">
//           <div className="d-flex justify-content-between align-items-center p-2 bg-body-secondary text-black rounded-top mb-2">
//             <p className="mb-0 fw-bold ms-2">Nou esdeveniment</p>
//             <button 
//               type="button" 
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => setShowForm(false)}
//             >
//               Tanca
//             </button>
//           </div>
//           {/* Campos del formulario */}
//           <div className="row mb-2 p-3">
//             <div className="col-md-6">
//               <label htmlFor="title" className="form-label">Títol</label>
//               <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="col-md-3">
//               <label htmlFor="city" className="form-label">Ciutat</label>
//               <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="col-md-3">
//               <label htmlFor="date" className="form-label">Data</label>
//               <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
//             </div>
//           </div>

//           <div className="row mb-2 p-3">
//             <div className="col-md-6">
//               <label htmlFor="venue" className="form-label">Espai / Sala</label>
//               <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} className="form-control" />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="image" className="form-label">URL Imatge</label>
//               <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="form-control" />
//             </div>
//           </div>

//           <div className="row mb-3 p-3">
//             <div className="col-12">
//               <label htmlFor="description" className="form-label">Descripció</label>
//               <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" />
//             </div>
//           </div>

//           <div className="d-flex gap-2 justify-content-end mb-3 me-3">
//             <button type="button" className="btn btn-secondary" onClick={() => setFormData(INITIAL_FORM)}>Netejar</button>
//             <button type="submit" className="btn btn-primary">Guardar</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AddEvent;
//-------------------------------------------------------------------------------------------------------------------------------------------
//APARTAT FINS EL PUNT 5 AMB LOCALSTORAGE
//-------------------------------------------------------------------------------------------------------------------------------------------