import React, { useState } from 'react'
import profile from '../../images/no_profile_picture.png'
import classes from './SearchedProfile.css'

/* const [artist, setArtist] = useState({
  name: 'Tudor',
  country: 'Romania',
  city: 'Timisoara',
  type: 'rapper'
}) */

const SeachedProfile = () => {
  return (
    <div
      className={`${classes.mainDiv} `}
    >
      <ul className={`col-lg-12 col-md-8 col-xs-4 d-flex flew-row justify-content-between `}>
        
          <div className='mt-1 mb-1'>
          <img
            src={profile}
            className={`${classes.image} `}
            alt='profile picture'
          />
          </div>
        
        <li> <p className={`m-3 ${classes.list}`}>Tudor</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>Romania</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>Timisoara</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>Rapper</p> </li>
      </ul>
     
      
      
      
    </div>
  )
}

export default SeachedProfile
