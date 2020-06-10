import React, { useState } from 'react'
import classes from './PostPage.css'
import { create } from 'apisauce'
import Post from './Post/Post'

const api = create({
  baseURL: 'http://localhost:5000'
})

const Posts = props => {
  const [post, setPost] = useState('')
  const [upload, setUpload] = useState(null)
  const [errorPost, setErrorPost] = useState(false)

  const sendPost = async () => {
    console.log('ce ii upload', upload)
    const formData = new FormData()
  /*  data.append('file', {
      // uri: upload.uri,
      type: upload.type,
      name: 'plm.jpeg'
    })*/
   /*  const data = new FormData()
    data.append('image', {
      uri: upload.uri,
      type: upload.type,
      name: 'plm.jpg',
    })
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }
    console.log('ooook')
    fetch(
      'http:/192.168.0.125:5000/upload/restaurant/addRestaurantImage',
      config
    )
      .then(checkStatusAndGetJSONResponse => {
        console.log('fmm', 'dafuuuck', checkStatusAndGetJSONResponse)
      })
      .catch(err => {
        console.log('aici err??', err)
      }) */
    const email = localStorage.getItem('email')
    try {

     const send = await api.post(
        `/upload/newPost`,
        { post: 'e ok',
          email: 'tudorel' },
       
        
      )
      console.log('send ii', send)
      if (send.status !== 201) {
        console.log('eroare')
        setErrorPost(true)
      }
    } catch (error) {
      console.log('avem erori', error)
    }
  }

  const handleUpload = e => {
    setUpload(e.target.files[0])
  }

  const showErrorMessage = () => {
    setTimeout(() => setErrorPost(false), 2000)
    return <div>eroare</div>
  }

  return (
    <div className={`container ${classes.mainDiv}`}>
      <div
        className={`${classes.secondDiv} mt-3 container col-lg-12 col-md-8 col-xs-4`}
      >
        <p className={`${classes.p} mt-4`}>Make a post:</p>
        <textarea
          placeholder='Share some good music or ask for it!'
          onChange={e => setPost(e.target.value)}
          className={`${classes.textArea} container w-100`}
        ></textarea>
        {console.log(post)}
        <form>
          <input
            className='btn btn-link'
            type='file'
            onChange={handleUpload}
            placeholder='Image'
          />
        </form>

        <button
          className={`btn btn-info ${classes.postButton}`}
          type='button'
          onClick={sendPost}
        >
          POST
        </button>
        {errorPost && showErrorMessage()}
      </div>

      <div className={`${classes.thirdDiv} container mt-4`}>
        <Post />
        <Post />

        <Post />
      </div>
    </div>
  )
}

export default Posts
