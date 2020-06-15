import React, { useState, useContext } from 'react'
import classes from './SideDrawer.css'
import { NavLink, Link } from 'react-router-dom'
import { TheContext } from '../../Context'

const SideDrawer = () => {
  const { state, TOGGLE_SIDE_DRAWER } = useContext(TheContext)

  return (
    <div className={`${classes.sideDrawer} `}>
      <ul className='navbar-nav  col-lg-12 col-md-8 col-xs-4 w-100 justify-content-center '>
        <li className='nav-item active'>
          <Link
            to='/News'
            onClick={TOGGLE_SIDE_DRAWER}
            className={`${classes.list} mb-4`}
          >
            News
          </Link>
        </li>
        <li className='nav-item'>
          <Link  onClick={TOGGLE_SIDE_DRAWER} to='/Profile' className={`${classes.list} mb-4`}>
            Profile
          </Link>
        </li>
        <li className='nav-item'>
          <Link  onClick={TOGGLE_SIDE_DRAWER} to='/Search' className={`${classes.list} mb-4`}>
            Search Musicians
          </Link>
        </li>
        <li className='nav-item'>
          <Link  onClick={TOGGLE_SIDE_DRAWER} to='/Myband' className={`${classes.list} mb-4`}>
            My band
          </Link>
        </li>
      </ul>

      <div>
        <button
          type='button'
          onClick={TOGGLE_SIDE_DRAWER}
          className='btn btn-danger mt-5 ml-2'
        >
          {' '}
          Back{' '}
        </button>
      </div>
    </div>
  )
}

export default SideDrawer
