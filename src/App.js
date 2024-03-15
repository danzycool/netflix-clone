import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

import { auth } from './firebase';
import { selectUser, setUser, unsetUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() =>
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(setUser({
          uid: authUser.uid,
          email: authUser.email
        }));

      } else {
        dispatch(unsetUser);
      }
    }), [dispatch]
  );

  return (
    <>
      <Routes>
        {
          user ? (
            <>
              <Route path={'/'} element={<LoginPage />} />
              <Route path={'/register'} element={<SignUpPage />} />
              <Route path={'*'} element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route path='/' element={<HomePage />} />
              <Route path='/profile' element={<ProfilePage />} />
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
