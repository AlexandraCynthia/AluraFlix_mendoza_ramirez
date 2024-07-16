import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoContext from '../../VideoContext';
import './NuevoVideo.css';
import { toast } from 'react-toastify';



function NuevoVideo() {
  const { addVideo } = useContext(VideoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: '',
    categoria: 'FrontEnd',
    imagen: '',
    video: '',
    descripcion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.titulo = formData.titulo ? '' : 'Este campo es obligatorio';
    tempErrors.imagen = formData.imagen ? '' : 'Este campo es obligatorio';
    tempErrors.video = formData.video ? '' : 'Este campo es obligatorio';
    tempErrors.descripcion = formData.descripcion ? '' : 'Este campo es obligatorio';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newVideo = { ...formData, id: Date.now().toString() };
      addVideo(newVideo);
      toast.success('Se añadió video');
    
      setTimeout(() => {
        navigate('/'); 
      }, 1000);
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
    <div className='contenedor-principal'>
        <div className='nuevo-video-titulo'>
          <h1>NUEVO VIDEO</h1>
          <h2 className='subtitulo-h2'>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
        </div>
        <div className='contenedor'>
            <div className='nuevo-video-titulo2'>Crear Tarjeta</div>
            <form className='media-query-tablet' onSubmit={handleSubmit}>
                  <div className='form-newvideo'>
                    <label>
                      <div className='label-titulo'>Título:</div>
                      <input 
                        className='input-valor roboto-bold' 
                        type="text" 
                        placeholder='Ingrese el titulo' 
                        name="titulo" 
                        value={formData.titulo} 
                        onChange={handleChange} 
                      />
                      {errors.titulo && <div className='error'>{errors.titulo}</div>}
                    </label>
                    <label>
                      <div className='label-titulo'>Categoría:</div>
                      <select 
                        className='input-valor roboto-bold' 
                        name="categoria" 
                        value={formData.categoria} 
                        onChange={handleChange}
                      >
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="BackEnd">BackEnd</option>
                        <option value="Innovacion">Innovación</option>
                      </select>
                    </label>
                  </div>
              
                  <div className='form-newvideo'>
                      <label>
                        <div className='label-titulo'>Imagen:</div>
                        <input 
                          placeholder='Ingrese el enlace de una imagen' 
                          className='form-middle roboto-bold' 
                          type="text" 
                          name="imagen" 
                          value={formData.imagen} 
                          onChange={handleChange} 
                        />
                        {errors.imagen && <div className='error'>{errors.imagen}</div>}
                      </label>
                      <label>
                        <div className='label-titulo'>Video:</div>
                        <input 
                          placeholder='Ingrese el enlace de un video' 
                          className='form-middle roboto-bold' 
                          type="text" 
                          name="video" 
                          value={formData.video} 
                          onChange={handleChange} 
                        />
                        {errors.video && <div className='error'>{errors.video}</div>}
                      </label>
                    </div>

                      <label>
                        <div className='label-titulo'>Descripción:</div>
                        <textarea 
                          placeholder='¿De qué se trata este video?' 
                          className='form-middle1 roboto-bold' 
                          name="descripcion" 
                          value={formData.descripcion} 
                          onChange={handleChange} 
                        />
                        {errors.descripcion && <div className='error'>{errors.descripcion}</div>}
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
