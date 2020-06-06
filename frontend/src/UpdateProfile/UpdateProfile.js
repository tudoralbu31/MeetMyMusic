import React, {Component} from 'react';
import UPDropdowns from './UPDropdowns/UPDropdowns'
import classes from './UpdateProfile.css'
import UpdatePhoto from './UpdatePhoto/UpdatePhoto'



class UpdateProfile extends Component{
  state={nickname: 'Alex'}
  
  
    render(){
        return(<div className={`${classes.updateProfile} col-lg-12 col-md-8 col-xs-4`}>
            <div className={`${classes.secondDiv} text-center`}>
            <p>Wellcome, {this.state.nickname}! Glad to have you here!</p>
            <p>Complete the information below so we can know more about you and match you with other musicians.</p>
            </div>
            <UPDropdowns />
            

        </div>) 
        
    }
}

export default UpdateProfile;