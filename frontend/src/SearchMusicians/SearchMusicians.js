import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './SearchMusicians.css'
import SearchedProfile from './SearchedProfile/SearchedProfile'

const searchMusicians = props => {
  return (
    <div className='container'>
      <div className={`col-lg-12 col-md-8 col-xs-4 mb-5 ${classes.secondDivs}`}>
        <form className='mb-3'>
          <label className={`${classes.mainLabels}`}>
            Search by nickname: 
          </label>
          <input
            className={`w-100 ${classes.search}`}
            type='text'
            placeholder='Search the nickname here'
          />
        </form>

        <button type='button' className={`btn btn-primary  ${classes.searchButtons}`}>
          {' '}
          Search{' '}
        </button>

        <div className={`mt-4 ${classes.resultDivs}`}>
          <SearchedProfile />
          <SearchedProfile />
          <SearchedProfile />
          <SearchedProfile />
          <SearchedProfile />
     
        </div>
      </div>

      <div className={`col-lg-12 col-md-8 col-xs-4 mb-5 ${classes.secondDivs}`}>
        <form>
          <p className={`${classes.mainLabels}`}>
            Search by country, city and type: 
          </p>
          
          <label className={classes.labelType}>Country: </label>
          <input className={`w-100 ${classes.search}`} type='text' placeholder='Country' />
        </form>

        <form>
          <label className={classes.labelType}>City: </label>
          <input className={`w-100 ${classes.search}`} type='text' placeholder='City' />
        </form>

        <form>
          <label className={classes.labelType}>Type: </label>
          <input className={`w-100 ${classes.search}`} type='text' placeholder='ex: guitarist/ drummer/ rapper/ producer' />
        </form>

        <button type='button' className={`btn btn-primary btn-xs mt-3 ${classes.searchButtons}`}>
          {' '}
          Search{' '}
        </button>

        <div className={`mt-4 ${classes.resultDivs}`}>
        <SearchedProfile />
        <SearchedProfile />
        <SearchedProfile />
       
        </div>
      </div>
    </div>
  )
}

export default searchMusicians
