import React, { useState, useEffect, useContext } from 'react'
import image from '../images/no_profile_picture.png'
import classes from './Profile.css'

import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Post from '../PostPage/Post/Post.jsx'
import {TheContext} from '../Context';

const profile = props => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({
    isError: false,
    reason: ''
  })
  const [upload, setUpload] = useState(null)

  /* const data1 = useContext(TheContext);
  console.log(data1);
 */
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
            followeri: 300000
          }
        }
        if (data.success) {
          const { profileData } = data
          setData(profileData)
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        }
      } catch (err) {
        console.log('Error from Profile.js', err)
      }
    }

    getProfileInfo()
  }, [])

  const handleUpload = e => {
    setUpload(e.target.files[0])
  }



  return (
    <div className={`container text-center   ${classes.mainDiv} `}>
      {loading ? <div>fa asta</div> : <div>nu se loaduie</div>}
      <div className={`container ${classes.userCard}`}>
        <div>
          <img
            className='m-2'
            src={image}
            alt='no profile picture'
            style={
              ({ width: '100%' }, { height: '350px' }, { borderRadius: '50%' })
            }
          ></img>
        </div>

        <div className='d-inline d-flex flex-column col-lg-12 col-md-8 col-xs-4 '>
          <div className=' '>
            <h1 className={`${classes.colorFont} m-5`}></h1>
          </div>

          <p className={`${classes.colorFont} m-3`}>
            Followers:<b>{data.followeri}</b>
          </p>

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
      </div>

      <div className={`container mt-5 ${classes.postArea}`}>
        
            <div className={`${classes.postari}`}>
             
                <Post />
                <Post />
                <Post />
                <Post />

              
            </div>
       
      </div>
    </div>
  )
}

export default profile
