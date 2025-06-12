import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Register() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const { register }            = useContext(AuthContext)
  const navigate                = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await register(email, password)
      // after sign-up, send user to the login page
      navigate('/login')
    } catch (err) {
      alert(err.message || 'Registration failed')
    }
  }

  return (
    <div className="page-wrapper">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min. 6 chars)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            style={{ color: '#6e3bb4', cursor: 'pointer' }}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  )
}
