import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const { login }               = useContext(AuthContext)
  const navigate                = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(email, password)
      // on success, send user to home/dashboard
      navigate('/home')
    } catch (err) {
      alert(err.message || 'Login failed')
    }
  }

  return (
    <div className="page-wrapper">
      <div className="auth-card">
        <h2>Log In</h2>
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
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/')}
            style={{ color: '#6e3bb4', cursor: 'pointer' }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  )
}
