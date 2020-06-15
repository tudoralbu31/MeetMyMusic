const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://elasticsearchtest:9200' })

module.exports = client
