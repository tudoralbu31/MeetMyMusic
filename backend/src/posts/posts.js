const client = require('../utils/es-connector')
const ES_INDICES = require('../constants/constants')

const addNewPost = async postData => {
	const { index } = ES_INDICES.POSTS
	console.log('fmm')
	try {
		const add = await client.index({
			index,
			body: { ...postData },
		})
		return {
			success: true,
			message: 'New post created !',
		}
	} catch (e) {
		console.log(`Error on addNewPost: ${e}`)
		return {
			success: false,
			reason: `Couldn't add new post`,
		}
	}
}

module.exports = {
	addNewPost,
}
