import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Navigation from './shared/Navigation/Navigation.component';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr />
      <Routes>
        <Route path='/' element={<div>Muroom Homepage</div>}></Route>
        <Route path='/places' element={<div>Muroom Places Page</div>}></Route>
        <Route path='/map' element={<div>Muroom Map Page</div>}></Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
