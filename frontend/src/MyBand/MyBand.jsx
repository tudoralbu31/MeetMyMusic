import React, {useState} from 'react'
import classes from './MyBand.css'

import SearchedProfile from '../SearchMusicians/SearchedProfile/SearchedProfile'


const MyBand = () =>{
    const [musiciansData, setMusiciansData] = useState([])

    return (<div className={`${classes.mainDiv} container`}>
         
         {musiciansData.length && musiciansData.map(musician => <SearchedProfile musician={musician} /> ) }
            


            


    </div>)
}


export default MyBand;