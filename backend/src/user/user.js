const { Client } = require('@elastic/elasticsearch')

const client = new Client({
	node: 'http://192.168.100.2:9200',
})

const getData = async () => {
    
}

module.exports = { getData }
