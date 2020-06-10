import React, { useState } from 'react'
import classes from './RegisterFields.css'
import { auth } from '../FirebaseAuth/FirebaseAuth'
import image from '../../images/MMM.png'

const createUserWithEmailAndPasswordHandler = async (
  event,
  email,
  password
) => {
  event.preventDefault()
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    console.log(`s-o generat useru: ${JSON.stringify(user, null, 2)}`)
    /*  generateUserDocument(user, {displayName}); */
  } catch (error) {
    console.log('muie', error)
    /* setError('Error Signing up with email and password'); */
  }

  /* setEmail("");
    setPassword("");
    setDisplayName(""); */
}

const registerFields = ({ setShowRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const registerNewUser = async event => {
    try {
      await createUserWithEmailAndPasswordHandler(event, email, password)
      setShowRegister(false)
    } catch (e) {
      console.log(`Something went wrong: ${e}`)
      return {
        success: false,
        reason: `Couldn't save new user`
      }
    }
  }

  return (
    <div className={('container', classes.mainDiv)}>
      <img className={classes.image} src={image}></img>

      <div>
        <form className='form-horizontal'>
          <div  className='form-group'>
            <label className={'control-label col-sm-2 '}
             >
              <b>Email:</b>
            </label>
            <div className='col-sm-12'>
            <input
               className='form-control'
              type='text'
              placeholder='Enter email'
              onChange={e => setEmail(e.target.value)}
            />
            </div>
            
          </div>

          <div  className='form-group'>
            <label className={'control-label col-sm-2 '}
             >
              <b>Password:</b>
            </label>
            <div className='col-sm-12'>
            <input
               className='form-control'
              type='text'
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)}
            />
            </div>
            
          </div>

          <div  className='form-group'>
            <label className={'control-label col-sm-10 '}
          >
              <b>Confirm Password:</b>
            </label>
            <div className='col-sm-12'>
            <input
               className='form-control'
              type='text'
              placeholder='Confirm Password'
            />
            </div>
            
          </div>

          <div  className='form-group'>
            <label className={'control-label col-sm-2 '}
              >
              <b>Nickname: </b>
            </label>
            <div className='col-sm-12'>
            <input
               className='form-control'
              type='text'
              placeholder='Nickname'
              onChange={e => setNickname(e.target.value)}
            />
            </div>
           
          </div>
        </form>

        <div className="text-center">
        <button
          className='mt-3 mb-3 btn btn-primary btn-lg'
          type='button'
          onClick={registerNewUser}
        >
          Register now!
        </button>
        </div>
        

        {/* <a
          className={classes.a}
          
          onClick={() => setShowRegister(false)}
        >
          ⇦  Back to Log In
        </a> */}
      </div>
    </div>
  )
}

export default registerFields
