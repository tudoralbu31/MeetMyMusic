const express = require('express')
const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
}) //app.use(cors())
app.get('/', (req, res) => {
  res.send('bun')
})

app.get('/api/profile/getProfileInfo/:email',  (req, res) => {
    const {email} = req.params
    res.send({
        success: true,
        profileData: {
            email,
            nume: 'tudor',
            oras: 'cugir',
            followeri: 50000000000000
        }
    })
})

app.post('/api/profile/updateInitialData', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  const data = req.body
  console.log(req.body)
  console.log('or venit datele', JSON.stringify(data, null, 2))
  res.send({
    sucess: true,
    message: 'All good. Datele or venit'
  })
})

app.listen(5000, () => console.log('server running on port 5000...'))
