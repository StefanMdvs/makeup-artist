import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Header, Footer, PageTitle } from './components/common';


function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path="/" element={<PageTitle title="home" />}/>          
          <Route path="/about" element={<PageTitle title="about" />}/>
          <Route path="/portfolio" element={<PageTitle title="portfolio" />}/>
          <Route path="/contact" element={<PageTitle title="contact" />}/>
        </Routes>
      <Footer />
    </div>
      
  );
}

export default App;
