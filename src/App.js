import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './custom.css'
import Particle from './components/Particles'
import Login from './components/Login'
import NavMenu from './components/NavMenu'
import axios from 'axios'
import Home from "./components/Home";
import ListApplications from "./components/ListApplications";
import AdminPanel from './components/Admin'


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({
    Department: null,
    Email: null,
    Faculty: null,
    IsAdmin: false,
    Name: "",
    PersonnelNumber: "",
    PhoneNumber: null,
    Status: null,
    Surname: "",
    Username: ""
  });
  
  const routes = [
    {
      index: true,
      element: <Home user={user} />,
    },
    {
      path: '/home',
      element: <Home user={user} />
    },
    {
      path: '/admin',
      element: <AdminPanel user={user} />
    },
    {
      path: '/applications',
      element: <ListApplications user={user} />
    },
  ];

  const handleLogin = (username, password) => {
    axios
      .post('http://localhost:3000/login', {
        username: username,
        password: password
      })
      .then(response => {
        console.log('Success:', response.data)
        const user_info = response.data
        setUser({
          Department: user_info.Department,
          Email: user_info.Email,
          Faculty: user_info.Faculty,
          IsAdmin: user_info.IsAdmin,
          Name: user_info.Name,
          PersonnelNumber: user_info.PersonnelNumber,
          PhoneNumber: user_info.PhoneNumber,
          Status: user_info.Status,
          Surname: user_info.Surname,
          Username: user_info.Username
        });
        setLoggedIn(true)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <>
      <Particle className='particles' />
      {loggedIn ? (
        <>
          <NavMenu onLogout={handleLogout} user={user}/>
          <Layout>
            <Routes>
              {routes.map((route, index) => {
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