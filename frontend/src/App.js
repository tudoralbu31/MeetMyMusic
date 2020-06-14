import React, { Component } from 'react'
import Auxi from './Auxi/Auxi'
import NavBar from './Navigation/NavBar/NavBar'
import classes from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import photo from './images/mmmLat.jpg'
import background from './images/musicasite.jpg'
import classes1 from './App.css'
import SideDrawer from './Navigation/SideDrawer/SideDrawer'
import { TheProvider } from './Context'

class App extends Component {
  render () {
    return (
      <div className={classes1.body}>
        <TheProvider>
          <Auxi />
        </TheProvider>
      </div>
    )
  }
}

export default App
