import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../Navigation/NavBar/NavBar'
import LogIn from '../LogIn/LogIn'

import UpdateProfile from '../UpdateProfile/UpdateProfile'
import SearchMusicians from '../SearchMusicians/SearchMusicians'
import Profile from '../Profile/Profile'
import PostPage from '../PostPage/PostPage'
import AuthForm from '../LogIn/AuthForm'
import decode from 'jwt-decode'

import photo from '../images/mmmLat.jpg'
import classes from './Auxi.css'
import background from '../images/musicasite.jpg'

const Auxi = () => {
  const [user, setUser] = useState({ isConnected: false, token: '' })
  const connectUser = token => {
    if (token) {
      setUser({ isConnected: true, token })
    }
  }
  const disconnectUser = () => {
    localStorage.removeItem('token')

    setUser({ isConnected: false, token: '' })
  }
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const decodedToken = decode(token)
      console.log('tokenul: ', decodedToken)
      const {email} = decodedToken
      setUser({ isConnected: true, token: '' })
    }
  }, [])

  return (
    <div className={classes.bgColor}  styles={{backgroundImage: `url(${background})`}}>
      {user.isConnected ? (
        <Router>
          <NavBar disconnectUser={disconnectUser} />
          
          <Route exact path='/News' component={PostPage} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Search' component={SearchMusicians} />
        </Router>
      ) : (
        <div>
          <AuthForm connectUser={connectUser} />
        </div>
      )}
    </div>
  )
}

export default Auxi
