import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Catalog from './components/catalog/Catalog';
import Admin from './components/admin/Admin';
import Actor from './components/actor/Actor';
import Film from './components/fim/Film';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Header/>
            <Routes>
                <Route path='main' element={<Main/>}/>
                <Route path='catalog/:id' element={<Film/>}/>
                <Route path='catalog' element={<Catalog/>}/>
                <Route path='admin' element={<Admin />}/>
                <Route path='actor/:id' element={<Actor/>}/>
                <Route path="*" element={<Navigate to="main" replace />} /> 
            </Routes>
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
