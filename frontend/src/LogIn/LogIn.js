import React, { useState } from 'react'
import classes from './LogIn.css'
import { auth, firestore } from './FirebaseAuth/FirebaseAuth'
import image from '../images/MMM.png'

const logInFields = ({ connectUser, setShowRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ anyProblem: false, reason: '' })
  const getUserMail = () => {
    const userMail = localStorage.getItem('email')
    console.log('uite mailu', userMail)
  }

  const handleLogin = async event => {
    console.log('mail', email)
    event.preventDefault()
    try {
      console.log('emailu ii', email, ' si parola', password)
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      console.log(user)
      // const savedem = await generateUserDocument(user, {})

      const { xa: token } = user
      localStorage.setItem('token', token)

      connectUser(token)
    } catch (e) {
      setError({ anyProblem: true, reason: e.message })
    }
  }

  const generateUserDocument = async (user, additionalData) => {
    if (!user) return
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
      const { email } = user
      try {
        await userRef.set({
          email,
          ...additionalData
        })
      } catch (error) {
        console.error('Error creating user document', error)
      }
    }
  }

  return (
    <div className={'container',classes.mainDiv}>
      <img className={classes.image} src={image}></img>
      
      <div >

        <div>
        <form className='form-horizontal'>
          <div className='form-group'>
            <label 
            className={`${classes.labelColor} control-label col-sm-2 `}
              
             for="email">
               Email:</label>
               
            <div className='col-sm-12'>
              <input
                className='form-control input-sm'
                type='text'
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter email'
                id="email"
              />
            </div>
          </div>

          <div className='form-group'>
            <label
             className={`control-label col-sm-2 ${classes.labelColor}`}
              for="pwd"
               >Password:</label>
            <div className='col-sm-12'>
              <input
                className='form-control'
                type='text'
                onChange={e => setPassword(e.target.value)}
                placeholder='Enter password'
                id="pwd"
              />
            </div>
          </div>
        </form>
        </div>

        <div className='text-center'>
        <button className={'btn btn-success btn-lg'} onClick={handleLogin} type='button'>
          Log In
        </button>
        </div>
        
        {/* <button className={classes.button} onClick={getUserMail}>
          da useru
        </button> */}

        <div className='text-center'>
        <button className={` m-3 btn btn-link ${classes.noAccount}`} type='button' onClick={() => setShowRegister(true)}>
          No accont? Register now!
        </button>
        </div>
        {error.anyProblem && <div>{error.reason}</div>}
      </div>
    </div>
  )
}

export default logInFields
