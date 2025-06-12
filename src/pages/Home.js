import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { logout } from '../firebase'
import './Home.css'

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">vendaph</h2>
        <nav>
          <ul>
            <li className="nav-item active">Home</li>
            <li className="nav-item">Search</li>
            <li className="nav-item">Your Library</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="main-content">
        {/* Top bar */}
        <header className="top-bar">
          <div>Hi, {user?.email}</div>
          <button onClick={logout} className="logout-btn">Log out</button>
        </header>

        {/* Hero / Featured */}
        <section className="hero">
          <h1>Good Evening</h1>
          <div className="card-grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card">
                <div className="card-img-placeholder" />
                <p>Playlist {i + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Your Top Genres */}
        <section className="section">
          <h2>Your Top Genres</h2>
          <div className="card-grid-sm">
            {['Pop', 'Rock', 'Jazz', 'Hip-Hop'].map((genre, i) => (
              <div key={i} className="card-sm">
                <div className="card-sm-img" />
                <p>{genre}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
