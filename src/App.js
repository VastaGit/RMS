import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Layout from './components/Layout'
import './custom.css'
import Particle from './components/Particles'
import Login from './components/Login'
import NavMenu from './components/NavMenu'
import axios from 'axios'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (username, password) => {
    axios
      .post('http://localhost:3000/login', {
        username: username,
        password: password
      })
      .then(response => {
        console.log('Success:', response.data)
      })
      .catch(error => {
        console.error(error)
      })
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <>
      <Particle className='particles' />
      {loggedIn ? (
        <>
          <NavMenu onLogout={handleLogout} />
          <Layout>
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route
                return <Route key={index} {...rest} element={element} />
              })}
            </Routes>
          </Layout>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
