import React from 'react'
import classes from './NavBar.css'
import image from '../../images/MMM.png'
import { NavLink, Link } from 'react-router-dom'

const NavBar = ({ disconnectUser }) => {
    return(<div className='mb-1'>
        <nav className={`${classes.navBar} navbar navbar-expand-lg navbar-light navBar col-12`} >
          <div className='container-fluid  d-flex flex-row col-12 '>

        <div className='d-flex flew-row col-10 justify-content-between'>
      <img src={image} alt="poza logo" style={{height: "100px"},{width: "150px"}} ></img> 
        
        <ul className='navbar-nav mr-auto w-100 justify-content-center m-2'>
          <li className='nav-item active'><Link to='/News' className={classes.color}>News</Link></li>
          <li className='nav-item'><Link to='/Profile' className={classes.color}>Profile</Link></li>
          <li className='nav-item'><Link to='/Search' className={classes.color}>Search Musicians</Link></li>
        </ul>
        </div>
        
       
        <div className='col-2' >
        <button className={`btn-danger my-2 my-sm-0 ${classes.disconect}`} onClick={disconnectUser}>Disconnect</button>
        </div>
          </div>

        </nav>
    </div> 

   
  )
}

export default NavBar
