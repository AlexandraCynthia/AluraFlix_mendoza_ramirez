import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NuevoVideo from './components/NuevoVideo/NuevoVideo';
import { VideoProvider } from './VideoProvider';

const App = () => {
  return (
    <VideoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} />
        </Routes>
      </Router>
    </VideoProvider>
  );
};

export default App;
