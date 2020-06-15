import React, { useState, useContext } from 'react'
import classes from './PostPage.css'
import { create } from 'apisauce'
import Post from './Post/Post'

import { TheContext } from '../Context'

const api = create({
	baseURL: 'http://localhost:5000',
})

const Posts = props => {
	const [post, setPost] = useState('')
	const [upload, setUpload] = useState(null)
	const [errorPost, setErrorPost] = useState(false)

	const { state } = useContext(TheContext)
	// TODO: Change this to get email from context
	const email = 'dani@gmail.com'

	const sendPost = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('file', upload)
		try {
			if (!upload) {
				const { data: newPost } = await api.post('/upload/newPost', {
					email,
					filename: null,
					post,
				})
				if (newPost.success) {
					return 'New post created'
				} else {
					return setErrorPost(true)
				}
			} else {
				const { data } = await api.post(`/upload/file/${email}`, formData, {
					headers: {
						'content-type': 'multipart/form-data',
					},
				})
				if (data.success) {
					const { filename } = data
					const newPost = await api.post('/upload/newPost', {
						email,
						filename,
						post,
					})
				} else {
					setErrorPost(true)
				}
			}
		} catch (error) {
			console.log('avem erori', error)
		}
	}

	const handleUpload = e => {
		setUpload(e.target.files[0])
	}

	const showErrorMessage = () => {
		setTimeout(() => setErrorPost(false), 2000)
		return <div>eroare</div>
	}

	return (
		<div className={`container ${classes.mainDiv}`}>
			<div
				className={`${classes.secondDiv} mt-3 container col-lg-12 col-md-8 col-xs-4`}
			>
				<p className={`${classes.p} mt-4`}>Make a post:</p>
				<textarea
					placeholder='Share some good music or ask for it!'
					onChange={e => setPost(e.target.value)}
					className={`${classes.textArea} container w-100`}
				></textarea>
				{console.log(post)}
				<form>
					<input
						className='btn btn-link'
						type='file'
						onChange={handleUpload}
						placeholder='Image'
					/>
				</form>

				<button
					className={`btn btn-info ${classes.postButton}`}
					type='button'
					onClick={sendPost}
				>
					POST
				</button>
				{errorPost && showErrorMessage()}
			</div>

			<div className={`${classes.thirdDiv} container mt-4`}>
				<Post />
			</div>
		</div>
	)
}

export default Posts
