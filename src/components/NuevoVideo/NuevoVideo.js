import React, { useState, useContext } from 'react';
import VideoContext from '../../VideoContext';
import './NuevoVideo.css';

function NuevoVideo() {
  const { addVideo } = useContext(VideoContext);

  const [formData, setFormData] = useState({
    titulo: '',
    categoria: 'FrontEnd',
    imagen: '',
    video: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { ...formData, id: Date.now().toString() };
    addVideo(newVideo);
    setFormData({
      titulo: '',
      categoria: 'FrontEnd',
      imagen: '',
      video: '',
      descripcion: ''
    });
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
    <div className='contenedor-principal'>
        <div className='nuevo-video-titulo'>
          <h1>NUEVO VIDEO</h1>
          <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
        </div>
        <div className='contenedor'>
            <div className='nuevo-video-titulo2'>Crear Tarjeta</div>
            <form onSubmit={handleSubmit}>
                  <div className='form-newvideo'>
                    <label>
                      <div className='label-titulo'>Título:</div>
                      <input className='input-valor roboto-bold' type="text" placeholder='Ingrese el titulo' name="titulo" value={formData.titulo} onChange={handleChange} />
                    </label>
                    <label>
                      <div className='label-titulo'>Categoría:</div>
                      <select className='input-valor roboto-bold' name="categoria" value={formData.categoria} onChange={handleChange}>
                        <option value="FrontEnd">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Innovacion">Innovacion</option>
                      </select>
                    </label>
                  </div>
              
                  <div className='form-newvideo'>
                      <label>
                        <div className='label-titulo'>Imagen:</div>
                        <input placeholder='Ingrese el enlace de una imagen' className='form-middle roboto-bold' type="text" name="imagen" value={formData.imagen} onChange={handleChange} />
                      </label>
                      <label>
                        <div className='label-titulo'>Video:</div>
                        <input placeholder='Ingrese el enlace de un video' className='form-middle roboto-bold' type="text" name="video" value={formData.video} onChange={handleChange} />
                      </label>
                    </div>

                      <label >
                        <div className='label-titulo'>Descripción:</div>
                        <textarea placeholder='¿De qué se trata este video?' className='form-middle1 roboto-bold' name="descripcion" value={formData.descripcion} onChange={handleChange} />
                      </label>
                <div className='botones'>
                  <button className='link-home' type="submit">Guardar</button>
                  <button className='link-home' type="button" onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default NuevoVideo;
