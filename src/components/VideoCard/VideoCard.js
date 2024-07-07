import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import VideoContext from '../../VideoContext';  // Asegúrate de importar correctamente
import PopUp from '../PopUp/PopUp';
import './VideoCard.css';

function VideoCard({ video, color }) {
  const { deleteVideo } = useContext(VideoContext);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleDelete = () => {
    deleteVideo(video.id);
  };

  const handleEdit = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="video-card" style={{ borderColor: color }}>
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        <img src={video.imagen} alt={video.titulo} className='img-card'/>
      </a>
      <div className="video-card-actions">
        <button onClick={handleEdit} className="edit-button">
          <FontAwesomeIcon icon={faEdit} /> Editar
        </button>
        <button onClick={handleDelete} className="delete-button">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </button>
      </div>
      {isPopUpOpen && (
        <PopUp
          videoId={video.id}
          closePopUp={closePopUp}
        />
      )}
    </div>
  );
}

export default VideoCard;
