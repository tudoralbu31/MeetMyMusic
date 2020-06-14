import React, { useState, useContext } from 'react'
import classes from './NavBar.css'
import image from '../../images/MMM.png'

import { NavLink, Link } from 'react-router-dom'
import ToggleButton from '../SideDrawer/ToggleButton'
import { TheContext } from '../../Context'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../../Backdrop/Backdrop'

const NavBar = ({ disconnectUser }) => {
  const { state, TOGGLE_SIDE_DRAWER } = useContext(TheContext)

  return (
    <div className='mb-1 w-100'>
      {state.globalConfig.sideDrawer && (
        <div>
          {' '}
          <SideDrawer style={{ zIndex: '2' }} />
          <Backdrop style={{ zIndex: '1' }} />
        </div>
      )}
      <nav
        className={`${classes.navBar} navbar navbar-expand-md navbar-light navBar col-12`}
      >
        <div className={`container-fluid d-flex flex-row col-12 justify-content-between nav-item nav-link ${classes.primulDivSubNav}`}>
          <div className={`d-flex flew-row col-10 justify-content-between nav-item nav-link ${classes.alDoileaDivSubNav}`}>
            <div
              className={`d-flex flex-row justify-content-between nav-item nav-link  ${classes.logoMenuDiv}`}
            >
              <div className='mt-3 mr-3'>
                <button
                  onClick={TOGGLE_SIDE_DRAWER}
                  className={classes.toggleButton}
                >
                  <div className={classes.toggleButtonLine} />
                  <div className={classes.toggleButtonLine} />
                  <div className={classes.toggleButtonLine} />
                </button>
              </div>

              <div className='mt-2'>
                <img
                  src={image}
                  alt='poza logo'
                  style={({ height: '100px' }, { width: '150px' })}
                ></img>
              </div>
            </div>

            <div>
              <ul
                className={`navbar-nav mr-auto w-100 justify-content-center mt-3 ${classes.ul}`}
              >
                <li className='nav-item active'>
                  <Link
                    to='/News'
                   
                    className={classes.color}
                  >
                    News
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/Profile'
                    
                    className={classes.color}
                  >
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/Search'
                    
                    className={classes.color}
                  >
                    Search Musicians
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/Myband'
                    
                    className={classes.color}
                  >
                    My band
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-2'>
            <button
              className={`btn-danger my-2 my-sm-0 ${classes.disconect}`}
              onClick={disconnectUser}
            >
              Disconnect
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
