import React, { useState } from 'react'

import Modal from './Modal/Modal'

import classes from './Post.css'

import Photo from '../../images/mmmLat.jpg'
import Photo2 from '../../images/no_profile_picture.png'

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
  const [status, setStatus] = useState({
    writeComments: false,
    like: false,
    comments: false,
    modal: false
  })

  const toggleWriteComents = () => {
    !status.writeComments
      ? setStatus({ writeComments: true })
      : setStatus({ writeComments: false })
  }

  const toggleComments = () => {
    !status.comments
      ? setStatus({ comments: true })
      : setStatus({ comments: false })
  }

  const changeLikeStatus = () => {
    status.like ? setStatus({ like: false }) : setStatus({ like: true })
  }

  const modalHandler = () => {
    !status.modal ? setStatus({ modal: true }) : setStatus({ modal: false })
  }

  return (
    <div className={`${classes.mainDiv} col-lg-12 col-md-8 col-xs-4`}>
      <div className={`container d-flex flex-row ${classes.nameTag}`}>
        <img
          src={Photo2}
          className={`${classes.margin}, ${classes.titlePhoto} mr-3 `}
        />
        <p className={classes.margin}>Nickname</p>
      </div>

      <div className={`${classes.secondDiv1} container`}>
        <div className={`${classes.postText} `}>
          <div className='col-lg-12 col-md-8 col-xs-4 d-inline d-flex flex-column'>
            <p>
              Aici o sa fie scrisul Aici o sa fie scrisul Aici o sa fie scrisul
              Aici o sa fie scrisul Aici o sa fie scrisul Aici o sa fie scrisul
              Aici o sa fie scrisul Aici o sa fie scrisul
            </p>

            <p>Aici o sa fie scrisul</p>
          </div>

          <div className={`m-2 ${classes.photoDiv}`}>
            <img src={Photo} className={classes.photo} />
          </div>
        </div>
      </div>

      <div className={`container ${classes.likeBar}`}>
        <div className='d-flex flex-row justify-content-between'>
          <div>
            {!status.like ? (
              <button
                type='button'
                onClick={changeLikeStatus}
                className={`btn btn-info ${classes.buttons}`}
              >
                Like
              </button>
            ) : (
              <button
                type='button'
                onClick={changeLikeStatus}
                className={`btn btn-info ${classes.buttons2}`}
              >
                Unlike
              </button>
            )
            }
            {              console.log(status.like)
}

            <button
              onClick={toggleWriteComents}
              type='button'
              className={`btn btn-info m-2 ${classes.buttons}`}
            >
              Comment
            </button>
            {console.log(status.writeComments)
            
            }
          </div>

          {/*Diviziunea in care sunt puse iconitele de like si comment*/}
          <div
            className={`d-flex flex-row justify-content-between ${classes.iconsDiv}`}
          >
            {/*Icontina te comment  */}
            <div
              className={`mt-2 d-flex flex-row justify-content-between  ${classes.commIconDiv}`}
            >
              <p>1</p>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faComment}
                size='1x'
                color='#4CBB17'
                className='mt-1'
                onClick={toggleComments}
              />
            </div>

            {/*Iconitna de like  */}
            <div
              className={`mt-2 d-flex flex-row justify-content-between ${classes.likeIconDiv}`}
            >
              <p>1</p>
              <FontAwesomeIcon
                icon={faThumbsUp}
                size='1x'
                color='#4CBB17'
                className='mt-1'
                onClick={modalHandler}
              />
            </div>
          </div>
        </div>

        {/*Verificare statusului butonului "comment." */}
        {status.writeComments ? (
          <div>
            <textarea
              placeholder='What do you think about it?'
              className={`${classes.textArea} container`}
            ></textarea>
          </div>
        ) : (
          <div></div>
        )}

        {/*Verificare statusului iconitei de commentarii */}
        {status.comments ? (
          <div className={`${classes.commentSection} mb-3  d-flex flex-column`}>
            <div
              className={`container mb-2 mt-2 ml-1  ${classes.singleComment}`}
            >
              <p>Comentariu</p>
            </div>

            <div
              className={`container mb-2 ml-1 mr-1 ${classes.singleComment}`}
            >
              <p>Comentariu</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {status.modal ? <Modal /> : <div></div>}
      
    </div>
  )
}

export default Post
