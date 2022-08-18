import React from 'react';
import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import'./global.css'
import Welcome from './generic/welcome';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default Root