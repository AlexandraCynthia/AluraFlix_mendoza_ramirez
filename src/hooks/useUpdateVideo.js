import { useContext } from 'react';
import VideoContext from '../VideoContext';  // Asegúrate de importar correctamente

const useUpdateVideo = () => {
  const { updateVideo } = useContext(VideoContext);
  if (!updateVideo) {
    throw new Error('useUpdateVideo must be used within a VideoProvider');
  }
  return updateVideo;
};

export default useUpdateVideo;
