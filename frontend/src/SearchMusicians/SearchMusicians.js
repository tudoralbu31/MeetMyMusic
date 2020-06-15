import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './SearchMusicians.css'
import SearchedProfile from './SearchedProfile/SearchedProfile'
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:5000'
})

const searchMusicians = props => {
  const [options, setOptions] = useState({
    country: null,
    city: null,
    type: null,
    nickName: null
  })
  const [musiciansData, setMusiciansData] = useState([])

  const [error, setError] = useState(false)

  const searchBy = async () => {
    const filteredOptions = Object.keys(options).reduce((acc, option) => {
      if(options[option]) acc[option] = options[option]
      return acc
    }, {})
    try {
      const { data } = await api.post(`/searchMusicians/getMusicians`, {...filteredOptions})
      if(data.success) {
        const {data: musiciansInfo} = data
        console.log('musicians', musiciansInfo)
        setMusiciansData(musiciansInfo)
      }
    } catch (e) {
      setError(true)
    }
  }

  return (
    <div className='container'>
      <div className={`col-lg-12 col-md-8 col-xs-4  ${classes.secondDivs}`}>
        <form className='mb-3'>
          <label className={`${classes.mainLabels}`}>Search by nickname:</label>
          <input
           onChange={e => setOptions({...options, nickName: e.target.value})}
            className={`w-100 ${classes.search}`}
            type='text'
            placeholder='Search the nickname here'
          />
        </form>

        

        <div className={`mt-4 ${classes.resultDivs}`}>
       {musiciansData.length && musiciansData.map(musician =>  <SearchedProfile musician={musician} />)}
        </div>
      </div>
 
    
    <div className={`text-center container ${classes.searchButtonDiv}`}>
    <button
          type='button'
          onClick={searchBy}
          className={`btn btn-primary text-center pt-3 pb-3 pl-4 pr-4  mt-3 mb-3${classes.searchButtons}`}
        >
          {' '}
          Search{' '}
        </button>
    </div>


      <div className={`col-lg-12 col-md-8 col-xs-4 mb-5 ${classes.secondDivs}`}>
        <form>
          <p className={`${classes.mainLabels}`}>
            Search by country, city and type:
          </p>

          <label className={classes.labelType}>Country: </label>
          <input
            onChange={e => setOptions({...options, country: e.target.value})}
            className={`w-100 ${classes.search}`}
            type='text'
            placeholder='Country'
          />
        </form>

        <form>
          <label className={classes.labelType}>City: </label>
          <input
           onChange={e => setOptions({...options, city: e.target.value})}
            className={`w-100 ${classes.search}`}
            type='text'
            placeholder='City'
          />
        </form>

        <form>
          <label className={classes.labelType}>Type: </label>
          <input
           onChange={e => setOptions({...options, type: e.target.value})}
            className={`w-100 ${classes.search}`}
            type='text'
            placeholder='ex: guitarist/ drummer/ rapper/ producer'
          />
        </form>

        

        <div className={`mt-4 ${classes.resultDivs}`}>
          {musiciansData.length && musiciansData.map(musician => <SearchedProfile musician={musician} /> ) }
        </div>
      </div>
    </div>
  )
}

export default searchMusicians
