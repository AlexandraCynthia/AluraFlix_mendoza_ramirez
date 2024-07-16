import React, { useState, useEffect } from 'react';
import useUpdateVideo from '../../hooks/useUpdateVideo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PopUp.css';

const PopUp = ({ videoId, closePopUp }) => {
  const updateVideo = useUpdateVideo();
  
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: 'FrontEnd',
    imagen: '',
    video: '',
    descripcion: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch(`https://db-json-alura-flix.onrender.com/videos/${videoId}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error('Error fetching video:', error));
  }, [videoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: value ? '' : 'Este campo es obligatorio'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      updateVideo(formData);
      toast.success('Se editó video');
      closePopUp();
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: '',
      categoria: 'FrontEnd',
      imagen: '',
      video: '',
      descripcion: ''
    });
    setErrors({});
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className='titulo-popup'>EDITAR CARD</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Título:</h2>
            <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
            {errors.titulo && <span className="error">{errors.titulo}</span>}
          </label>
          <label>
            <h2>Categoría:</h2>
            <select name="categoria" value={formData.categoria} onChange={handleChange}>
              <option value="FrontEnd">Front End</option>
              <option value="BackEnd">Back End</option>
              <option value="Innovacion">Innovacion</option>
            </select>
            {errors.categoria && <span className="error">{errors.categoria}</span>}
          </label>
          <label>
            <h2>Imagen:</h2>
            <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} />
            {errors.imagen && <span className="error">{errors.imagen}</span>}
          </label>
          <label>
            <h2>Video:</h2>
            <input type="text" name="video" value={formData.video} onChange={handleChange} />
            {errors.video && <span className="error">{errors.video}</span>}
          </label>
          <label>
            <h2>Descripción:</h2>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
            {errors.descripcion && <span className="error">{errors.descripcion}</span>}
          </label>
          <div className='botones'>
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleReset}>Limpiar</button>
          </div>
        </form>
        <button type="button" className="close-button" onClick={closePopUp}>✖</button>
      </div>
    </div>
  );
};

export default PopUp;
