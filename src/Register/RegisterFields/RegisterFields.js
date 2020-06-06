import React, {useState} from 'react'
import classes from './RegisterFields.css'
import {auth} from '../../LogIn/FirebaseAuth/FirebaseAuth'

/* const createUser = (email, pass) => new Promise((resolve, reject) => {
    try {
        resolve(auth.createUserWithEmailAndPassword(email, pass))
    } catch(e) {
        reject(e)
    }

})
 */
const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(`s-o generat useru: ${JSON.stringify(user, null, 2)}`)
     /*  generateUserDocument(user, {displayName}); */
    }
    catch(error){
        console.log('muie', error)
      /* setError('Error Signing up with email and password'); */
    }

    /* setEmail("");
    setPassword("");
    setDisplayName(""); */
  };

const registerFields = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')

    const registerNewUser = async event => {
        try {
            await createUserWithEmailAndPasswordHandler(event, email, password)
            /* createUser(email, password).then(() => console.log('totu ok')).catch(e => console.log('pula')) */
        } catch(e) {
            console.log(`Something went wrong: ${e}`)
            return {
                success: false,
                reason: `Couldn't save new user`
            }
        }
    }

  return (
    <div className={classes.mainDiv}>
      <form>
        <label>
          <b>Emai:</b>
        </label>
        <input type='text' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
      </form>

      <form>
        <label>
          <b>Password:</b>
        </label>
        <input type='text' placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
      </form>

      <form>
        <label>
          <b>Confirm Password:</b>
        </label>
        <input  type='text' placeholder='Confirm Password' />
      </form>

      <form>
        <label>
          <b>Nickname: </b>
        </label>
        <input type='text' placeholder='Nickname' onChange={e => setNickname(e.target.value)} />
      </form>

      <button type='button' onClick={registerNewUser}>Register now!</button>
    </div>
  )
}

export default registerFields
