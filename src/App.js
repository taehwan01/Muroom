import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Navigation from './shared/Navigation/Navigation.component';

import SideContents from './components/SideContents/SideContents.component';
import Home from './Pages/Home';
import Places from './Pages/Places';
import Map from './Pages/Map';

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <hr className='navbar-line' /> */}
      <div className='contents'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/places' element={<Places />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
