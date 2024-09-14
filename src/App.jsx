import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Whatwedo from './pages/Whatwedo';
import Betpawa from './pages/Betpawa';
import Contact from './pages/Contact';
import News from  './pages/New';
import Home from './pages/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMap from './pages/MyMap';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/betpawa" element={<Betpawa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
        <Route path="/mymap" element={<MyMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
