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

  //buttonul de contact
  const [contact, setContact] = useState({show : false});
  /* const toggleContact= () =>{
    !contact.show
    ?setContact({show: true})
    :setContact({show: false})
  } */

  //const toggleContact = () => !contact.show && setContact({show: !contact.show})

  //buttonul de follow
  const [follow, setFollow] = useState({following: false});
  const switchFollow = () =>{
    !follow.following
    ?setFollow({following: true})
    :setFollow({following: false})
  }


  const {state: musicianData} = useContext(TheContext);
  console.log('--------------------------------',musicianData);
  
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
          <h1 className={`${classes.colorFont} m-5`}>{musicianData.nickname}</h1>
          </div>

          <p className={`${classes.colorFont} m-3`}>
            Followers:<b>{musicianData.followers}</b>
          </p>

          <h2 className={`${classes.colorFont} m-3`}>
            {musicianData.city}, {musicianData.country}
          </h2>
          <h2 className={`${classes.colorFont} m-5`}>{musicianData.type}</h2>
         
         {!follow.following
         ?(<button onClick={switchFollow} className={`${classes.followButton} btn btn-success `}>
         Follow
       </button>)
        :(<button  onClick={switchFollow} className={`${classes.followButton} btn btn-success `}>
        Unfollow
      </button>)
     
      }
      { console.log(follow.following)}
            
          

          <div>
          <button onClick={() => setContact({show: !contact.show})} className={`${classes.contactButton} btn btn-info `}>
              Contact
            </button>
          </div>
          
          {contact.show
          ?(<div className={`${classes.contactDiv} text-center`}>
            <p>Email this musician at:</p>
            <h2> email </h2>
             

          </div>)
        :(<div></div>)
        }


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
