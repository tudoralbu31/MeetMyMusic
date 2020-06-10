const express = require('express')
const app = express()
const fs = require('fs')
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })


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

app.post('/upload/:userEmail/:type',upload.single('file'), async (req, res) => {
  console.log('oook')
  const {userEmail, type} = req.params

  const image = fs.readFileSync(req.file.path).toString('base64')
    const fmm = Buffer.from(image, 'base64')
    console.log('fmm', fmm)
		fs.writeFileSync('test.jpg', fmm)
		res.send({
			success: true,
		})
})

// pentru trimis date in backend 
app.post('/upload/newPost', async (req, res) => {
  const data = req.body
  res.send({
    success: true,
    message: 'New post created'
  })
})

//pentru luat date din backend
app.get('/auth/:email', async(req,res) =>{
  const email = req.params.email;
  // aici face tomi chestii cu elastisearchu

  // [...]

  res.send({
    success: true,
    data: {
      firstTime: true
    }
  })
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
