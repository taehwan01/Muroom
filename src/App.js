import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.scss';
import Navigation from './shared/Navigation/Navigation.component';

import SideContents from './components/SideContents/SideContents.component';
import Home from './Pages/Home/Home';
import Places from './Pages/Places';
import Map from './Pages/Map';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AccountActivate from './Pages/Auth/AccountActivate';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Toaster />
      <div className='contents'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/places' element={<Places />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/auth/account-activate/:token'
            element={<AccountActivate />}
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
