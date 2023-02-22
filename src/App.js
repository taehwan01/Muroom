import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Navigation from './shared/Navigation/Navigation.component';
import Map from './components/Map/Map.component';
import SideContents from './components/SideContents/SideContents.component';
import SideContents

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr className='navbar-line' />
      <Routes>
        <Route
          path='/'
          element={
            <div className='container-row'>
              <Map />
              <SideContents />
            </div>
          }
        ></Route>
        <Route path='/places' element={<div>Muroom Places Page</div>}></Route>
        <Route path='/map' element={<div>Muroom Map Page</div>}></Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
