import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import NuevoVideo from './components/NuevoVideo/NuevoVideo';
import { VideoProvider } from './VideoProvider';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <VideoProvider>
      <Router>
      <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} />
        </Routes>
        <Footer />
      </Router>
    </VideoProvider>
  );
};

export default App;
