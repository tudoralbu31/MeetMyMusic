import React from 'react'
import image from '../../images/no_profile_picture.png'
import classes from './UpdatePhoto.css'

const updatePhoto = props => {
  return (
    <div>
      
      <p>Finally, upload a profile picture!</p>
     
        <img src={image} alt='no profile photo' className={classes.uploadPhoto}></img>
        <button className={classes.uploadButton} type="button">UPLOAD</button>
     
    </div>
  )
}

export default updatePhoto
