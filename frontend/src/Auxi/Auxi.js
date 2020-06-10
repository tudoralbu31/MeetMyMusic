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
import MyBand from '../MyBand/MyBand'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import { TheProvider } from '../Context'

import photo from '../images/mmmLat.jpg'
import classes from './Auxi.css'
import background from '../images/musicasite.jpg'

const Auxi = () => {
  const [drawer, setDrawer] = useState({ active: false })
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
      const { email } = decodedToken
      setUser({ isConnected: true, token: '' })
    }
  }, [])

  return (
    <TheProvider>
      <div
        className={classes.bgColor}
        styles={{ backgroundImage: `url(${background})` }}
      >
        {user.isConnected ? (
          <Router>
            <NavBar disconnectUser={disconnectUser} />

            {/*    <SideDrawer style={{zIndex:'2'}} />
          <Backdrop style={{zIndex: '1'}} /> */}
            <Route exact path='/News' component={PostPage} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/Search' component={SearchMusicians} />
            <Route exact path='/Myband' component={MyBand} />
          </Router>
        ) : (
          <div>
            <AuthForm connectUser={connectUser} />
          </div>
        )}
      </div>
    </TheProvider>
  )
}

export default Auxi
