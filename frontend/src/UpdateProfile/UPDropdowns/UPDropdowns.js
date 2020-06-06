import React, { useState, useEffect } from 'react'
import classes from './UPDropdowns.css'
import image from '../../images/no_profile_picture.png'

import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://localhost:5000',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})

const upDropdowns = props => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [domain, setDomain] = useState('')
  const [email, setEmail] = useState('tudoralbu@gmail.com')

  /*  const [data, setData] = useState({})

  useEffect(async () => {
    //const {data} = await api.get(`/api/profile/getProfileInfo/${email}`)
    const data = {
      success: true,
      profileData: {
          email,
          nume: 'tudor',
          oras: 'cugir',
          followeri: 50000000000000
      }
    }
    if(data.success) {
      const {profileData} = data
      setData(profileData)
    }
  }, [])````` */

  const sendProfileData = async () => {
    try {
      const sendInfo = await api.post('/api/profile/updateInitialData', {
        country,
        city,
        domain,
        email
      })
      if (sendInfo.success) {
        console.log('blana, s-or salvat datele')
      }
    } catch (e) {
      console.log('eroarea ii', e)
    }
  }

  return (
    <div
      className={`${classes.dropdown}  container col-lg-12 col-md-8 col-xs-4`}
    >
      <form className='container w-75 mb-5'>
        <p className={`${classes.mainP}`}>
          <b>First of all, your country:</b>
        </p>
        <input
          className={`${classes.inputFields}`}
          type='text'
          onChange={e => setCountry(e.target.value)}
        />

        <p className={`${classes.mainP}`}>
          <b>Ok, now your city:</b>
        </p>
        <input
          className={`${classes.inputFields}`}
          type='text'
          onChange={e => setCity(e.target.value)}
        />

        <p className={`${classes.mainP}`}>
          <b>And your main music domain</b>
        </p>
        <input
          className={`${classes.inputFields}`}
          type='text'
          onChange={e => setDomain(e.target.value)}
        />

        <p className={`${classes.mainP}`}>Finally, upload a profile picture!</p>

       <div className={`${classes.photoDiv}`}> 
        <img
          src={image}
          alt='no profile photo'
          className={`${classes.uploadPhoto}`}
        ></img>
        <input type='file' />
        </div>
      </form>
    


      <div className='text-center'>
        <button
          className={`${classes.doneButton} btn btn-success col-5`}
          type='button'
          onClick={sendProfileData}
        >
          We're done!
        </button>
      </div>
    </div>
  )
}

export default upDropdowns
