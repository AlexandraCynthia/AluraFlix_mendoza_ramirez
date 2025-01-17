import React, { useState, useEffect } from 'react';
import VideoContext from './VideoContext';

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = () => {
    fetch('https://db-json-alura-flix.onrender.com/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const addVideo = (video) => {
    fetch('https://db-json-alura-flix.onrender.com/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    })
      .then(response => response.json())
      .then(() => fetchVideos())
      .catch(error => console.error('Error adding video:', error));
  };

  const deleteVideo = (id) => {
    fetch(`https://db-json-alura-flix.onrender.com/videos/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetchVideos())
      .catch(error => console.error('Error deleting video:', error));
  };

  const updateVideo = (updatedVideo) => {
    fetch(`https://db-json-alura-flix.onrender.com/videos/${updatedVideo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVideo),
    })
      .then(() => fetchVideos())
      .catch(error => console.error('Error updating video:', error));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, updateVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
