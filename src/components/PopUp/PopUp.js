import React, { useState, useEffect } from 'react';
import useUpdateVideo from '../../hooks/useUpdateVideo';
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

  useEffect(() => {
    fetch(`http://localhost:3333/videos/${videoId}`)
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(formData);
    closePopUp();
  };

  const handleReset = () => {
    setFormData({
      titulo: '',
      categoria: 'FrontEnd',
      imagen: '',
      video: '',
      descripcion: ''
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>EDITAR CARD</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Título:</h2>
            <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
          </label>
          <label>
            <h2>Categoría:</h2>
            <select name="categoria" value={formData.categoria} onChange={handleChange}>
              <option value="FrontEnd">Front End</option>
              <option value="BackEnd">Back End</option>
              <option value="Innovacion">Innovacion</option>
            </select>
          </label>
          <label>
            <h2>Imagen:</h2>
            <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} />
          </label>
          <label>
            Video:
            <input type="text" name="video" value={formData.video} onChange={handleChange} />
          </label>
          <label>
            <h2>Descripción:</h2>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleReset}>Limpiar</button>
          <button type="button" onClick={closePopUp}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
