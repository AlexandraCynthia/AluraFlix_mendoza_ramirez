import React, { useContext } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import VideoContext from '../../VideoContext';
import './Home.css';

function Home() {
  const { videos } = useContext(VideoContext);

  const categorias = {
    FrontEnd: { color: '#6BD1FF' },
    BackEnd: { color: '#00C86F' },
    Innovacion: { color: '#FFBA05' }
  };

  return (
    <div className='container-banner'>
      <div className="banner">
        <img className='img-banner' src="https://res.cloudinary.com/dgxnatqij/image/upload/v1717636589/ONE/901ef8448792e2e2a7c9385b66af1565_z1dyfc.jpg" alt="Banner" />
        <div className="banner-textos">
            <p className='titulo-baner roboto-bold'>FRONT END</p>
            <div className='sub-banner'>
              <h1>Challengue React</h1>
              <h2>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</h2>
            </div>
        </div>
      </div>
      {Object.keys(categorias).map(categoria => (
        <div className="contenedor-cards"  key={categoria}>
          <h2 className='titulo-categoria roboto-bold' style={{ backgroundColor: categorias[categoria].color }}>{categoria}</h2>
          <div className="video-list">
            {videos.filter(video => video.categoria === categoria).map(video => (
              <VideoCard key={video.id} video={video} color={categorias[categoria].color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
