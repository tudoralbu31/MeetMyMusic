import React, { useState } from 'react'
import profile from '../../images/no_profile_picture.png'
import classes from './SearchedProfile.css'

/* const [artist, setArtist] = useState({
  name: 'Tudor',
  country: 'Romania',
  city: 'Timisoara',
  type: 'rapper'
}) */

const SeachedProfile = ({musician}) => {
  console.log('ce plm', musician)
  const {nume, tara, localitate, ocupatie} = musician
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
        
        <li> <p className={`m-3 ${classes.list}`}>{nume}</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>{tara}</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>{localitate}</p> </li>
        <li> <p className={`m-3 ${classes.list}`}>{ocupatie}</p> </li>
      </ul>
     
      
      
      
    </div>
  )
}

export default SeachedProfile
