import React, { createContext, useState, useEffect } from "react"
import {
  registerWithEmail,
  loginWithEmail,
  logout as fbLogout,
  onAuthChange
} from "../firebase"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthChange(u => {
      setUser(u)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const register = (email, password) =>
    registerWithEmail(email, password)

  const login = (email, password) =>
    loginWithEmail(email, password)

  const logout = () =>
    fbLogout()

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
