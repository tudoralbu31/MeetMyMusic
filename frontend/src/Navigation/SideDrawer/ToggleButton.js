import React from 'react'
import classes from './ToggleButton.css'

const ToggleButton = () =>{
    <button className={classes.toggleButton}>
                <div className={classes.toggleButtonLine} />
                <div className={classes.toggleButtonLine} />
                <div className={classes.toggleButtonLine} />
              </button>
}

export default ToggleButton;