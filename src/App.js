import React from 'react';

import './App.css';
import Main from './AuthApp/Main';
import {  Route, Routes } from 'react-router-dom';
import LogIn from './AuthApp/LogIn';
import SignUp from './AuthApp/SignUp';
import { AuthContextProvider } from './AuthApp/context/AuthContext';
import ProtectedRoute from './AuthApp/ProtectedRoute';


function App() {
  return (

    
      <div className="App">
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/main' element={<ProtectedRoute><Main/></ProtectedRoute>}/>
        </Routes>
        </AuthContextProvider>
        
    </div>
    
    
    
  );
}

export default App;
