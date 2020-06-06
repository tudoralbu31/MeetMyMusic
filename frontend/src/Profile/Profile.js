import React, { useState, useEffect } from 'react'
import image from '../images/no_profile_picture.png'
import classes from './Profile.css'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const profile = props => {
  const [data, setData] = useState({})
  const [upload, setUpload] = useState(null)

  useEffect(() => {
    const getProfileInfo = async () => {
      try {
      //  const { data } = await api.get(`/api/profile/getProfileInfo/${email}`)
        const data = {
          success: true,
          profileData: {
            //  email,
            nume: 'Tudor',
            oras: 'Cugir',
            tara: 'Romania',
            tip: 'Trapper',
            followeri: 50000
          }
        }
        if (data.success) {
          const { profileData } = data
          setData(profileData)
        }
      } catch (err) {
        console.log('Error from Profile.js', err)
      }
    }

    getProfileInfo();

  }, [])

  const handleUpload = e => {
    setUpload(e.target.files[0])
  }

  const postari = [
    ['Chitara ', 'Bass ', 'Tobe '],
    ['Chitara', 'Bass', 'Tobe'],
    ['Chitara', 'Bass', 'Tobe'],
    ['Chitara', 'Bass', 'Tobe'],
    ['Chitara', 'Bass', 'Tobe']
  ]

  return (
    <div className={`container text-center   ${classes.mainDiv} `}>
      <div className='container '>
        <img
          className='m-2'
          src={image}
          alt='no profile picture'
          style={
            ({ width: '100%' }, { height: '350px' }, { borderRadius: '50%' })
          }
        ></img>

        <FontAwesomeIcon icon={faHome} size='5x' />
        <h1 className={`${classes.colorFont} m-5`}>
          <b>{data.nume}</b>
        </h1>
        <h2 className={`${classes.colorFont} m-3`}>
          Followers:<b>{data.followeri}</b>
        </h2>
        <h2 className={`${classes.colorFont} m-3`}>
          {data.oras}, {data.tara}
        </h2>
        <h2 className={`${classes.colorFont} m-5`}>{data.tip}</h2>

        <p>
          <button className={`${classes.followButton} btn btn-success `}>
            Follow
          </button>
        </p>
      </div>

      <div className='container bg-dark mt-5'>
        {postari.map(instrumente =>
          instrumente.map(fiecare => (
            <div className={`${classes.postari}`}>
              <ul>
                <li>{fiecare}</li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default profile
