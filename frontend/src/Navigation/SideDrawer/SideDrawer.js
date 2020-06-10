import React from 'react'
import classes from './SideDrawer.css'
import { NavLink, Link } from 'react-router-dom'


const SideDrawer = () =>{
  return <div className={`${classes.sideDrawer} `}>
      <ul className='navbar-nav  col-lg-12 col-md-8 col-xs-4 w-100 justify-content-center '>
                <li className='nav-item active'>
                  <Link to='/News' className={`${classes.list} mb-4`} >
                    News
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Profile' className={`${classes.list} mb-4`} >
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Search' className={`${classes.list} mb-4`} >
                    Search Musicians
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Myband' className={`${classes.list} mb-4`}>
                    My band
                  </Link>
                </li>
              </ul>
  </div>
}

export default SideDrawer;