// src/App.js
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Register from './pages/Register'
import Login    from './pages/Login'
import Home     from './pages/Home'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route index element={<Register />} />
      <Route path="register" element={<Register />} />
      <Route path="login"    element={<Login />} />

      {/* Protected */}
      <Route
        path="home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* Fallback: redirect any unknown route back to Register */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
