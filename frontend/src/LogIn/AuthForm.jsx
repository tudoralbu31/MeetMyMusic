import React, {useState} from 'react'
import Login from './LogIn'
import RegisterFields from './RegisterFields/RegisterFields'

const AuthForm = ({connectUser}) => {
    const [showRegister, setShowRegister] = useState(false)
    return (
        <div>
            {showRegister ? <RegisterFields  setShowRegister={setShowRegister} /> : <Login connectUser={connectUser}  setShowRegister={setShowRegister} />}
        </div>
    )
}

export default AuthForm