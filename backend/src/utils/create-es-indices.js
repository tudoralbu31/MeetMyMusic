const ES_INDICES = require('../constants/constants')
const client = require('./es-connector')

const createIndices = async () => {
	for (let el in ES_INDICES) {
		const { index, type } = ES_INDICES[el]
		try {
			const { body } = await client.indices.exists({ index })
			if (!body) {
				await client.indices.create({
					index,
					body: {
						settings: { index: { blocks: { read_only_allow_delete: false } } },
					},
				})
				console.log(`Index ${index} created`)
			}
		} catch (e) {
            console.log(e)
			console.log(`Couldn't create index ${index}`)
		}
	}
}

module.exports = { createIndices }