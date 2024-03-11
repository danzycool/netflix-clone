import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {

  const user = null;

  return (
    <>
      <Routes>
        {
          !user ? (
            <>
              <Route path={'/'} element={<LoginPage />} />
              <Route path={'*'} element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route path='/' element={<HomePage />} />
              <Route
                path="*"
                element={
                  <div
                    className='flex w-full h-screen items-center justify-center uppercase'
                  >
                    <h1 className='text-3xl font-bold text-white'>404 - Page Not Found!!!</h1>
                  </div>
                }
              />
            </>
          )
        }
      </Routes>
    </>
  );
}

export default App;
