const express = require('express')
const app = express()
const fs = require('fs')
const multer = require('multer')
const upload = multer({ dest: './uploads/' })
const cors = require('cors')
const moment = require('moment')

const { createIndices } = require('./src/utils/create-es-indices')

const { addNewPost } = require('./src/posts/posts')

createIndices()
const { getData } = require('./src/user/user')

getData()

const acceptedFormats = ['video/mp4', 'image/jpg', 'image/jpeg']

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads')
	},
	filename: (req, file, cb) => {
		if (!acceptedFormats.includes(file.mimetype)) return
		cb(null, `${moment().toISOString()}##${file.originalname}`)
	},
})
const upload = multer({ storage })

/*  
PRIMESC DATE:
-la profile (nickname, followers, city, country, type, followed, email)
-la postari (date pe care tot eu le bag anterior (profile picture, nickname, text, picture, comments, coment nr, like nr))
-la search (pe baza datelor pe care tot eu le bag)
 
TRIMIT DATE: 
-la search (nickname sau {country, city, type}) 
-la postare (text, file) -rezolvat
-la post (like, com) -rezolvat


*/

// ASTA AM ADAUGAT NOU !!
// NEW CHANGE

app.use(cors())

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

app.post(
  '/upload/:userEmail/:type',
  upload.single('file'),
  async (req, res) => {
    console.log('oook')
    const { userEmail, type } = req.params

    const image = fs.readFileSync(req.file.path).toString('base64')
    const fmm = Buffer.from(image, 'base64')
    console.log('fmm', fmm)
    fs.writeFileSync('test.jpg', fmm)
    res.send({
      success: true
    })
  }
)

app.post('/searchMusicians/getMusicians', async (req, res) => {
  const searchFilters = req.body
  const getMusicians = [
    {
      nume: 'tudor',
      tara: 'romania',
      localitate: 'cugir',
      ocupatie: 'rapper'
    },
    {
      nume: 'tudor',
      tara: 'romania',
      localitate: 'cugir',
      ocupatie: 'rapper'
    },
    {
      nume: 'tudor',
      tara: 'romania',
      localitate: 'cugir',
      ocupatie: 'rapper'
    },
    {
      nume: 'tudor',
      tara: 'romania',
      localitate: 'cugir',
      ocupatie: 'rapper'
    }
  ]

  res.send({
    success: true,
    data: getMusicians
  })
})

app.post('/interactions/:action', async (req, res) => {
  const { action } = req.params
  res.send({
    success: true,
    message: 'The action happend'
  })
})

app.get('/status/checkStatus', (req, res) => {
	res.send('Live')
})

app.post('/upload/file/:userEmail', upload.single('file'), async (req, res) => {
	let filename = req.file ? req.file.filename : null
	const { userEmail, type } = req.params
	res.send({
		success: true,
		filename,
	})
})

app.post('/searchMusicians/single/:nickname', async (req, res) => {
	const { nickname } = req.params
	res.send({
		success: true,
		message: 'Got the nickname',
	})
})

app.post('/searchMusicians/multipe', async (req, res) => {
	const { country, city, type } = req.params
	res.send({
		success: true,
		message: 'Got the country, city and type',
	})
})

app.post('/interactions/:action', async (req, res) => {
	const { action } = req.params
	res.send({
		success: true,
		message: 'The action happend',
	})
})

// pentru trimis date in backend
app.post('/upload/newPost', async (req, res) => {
	const data = req.body
	const createPost = await addNewPost(data)
	res.send(createPost)
})

//pentru luat date din backend
app.get('/auth/:email', async (req, res) => {
  const email = req.params.email
  // aici face tomi chestii cu elastisearchu

  // [...]

  res.send({
    success: true,
    data: {
      firstTime: true
    }
  })
})

app.get('api/post/reactions', async (req, res) => {
  const { reaction } = req.params
  res.send({
    success: true
  })
})

app.get('api/post/comments', async (req, res) => {
  const { comment } = req.params
  res.send({
    succes: true
  })
})

app.get('/api/profile/followStatus', async (req, res) => {
  const { status } = req.params
  res.send({
    succes: true
  })
})

app.get('/api/post/nickname/:email', async (req, res) => {
  const { postNickname } = req.params
  res.send({
    succes: true
  })
})

app.get('/api/profile/getProfileInfo/:email', (req, res) => {
  const { email } = req.params
  res.send({
    success: true,
    profileData: {
      email,
      nume: 'tudor',
      oras: 'cugir',
      followeri: 50000000000000,
      tip: 'Trapper'
    }
  })
})

app.get('/seachMusicians/musicians', (req, res) => {
  const { musician } = req.param
  res.send({
    succes: true
  })
	const email = req.params.email
	// aici face tomi chestii cu elastisearchu

	// [...]

	res.send({
		success: true,
		data: {
			firstTime: true,
		},
	})
})

app.get('api/post/reactions', async (req, res) => {
	const { reaction } = req.params
	res.send({
		success: true,
	})
})

app.get('api/post/comments', async (req, res) => {
	const { comment } = req.params
	res.send({
		succes: true,
	})
})

app.get('/api/profile/followStatus', async (req, res) => {
	const { status } = req.params
	res.send({
		succes: true,
	})
})

app.get('/api/post/nickname/:email', async (req, res) => {
	const { postNickname } = req.params
	res.send({
		succes: true,
	})
})

app.get('/api/profile/getProfileInfo/:email', (req, res) => {
	const { email } = req.params
	res.send({
		success: true,
		profileData: {
			email,
			nume: 'tudor',
			oras: 'cugir',
			followeri: 50000000000000,
			tip: 'Trapper',
		},
	})
})

app.get('/seachMusicians/musicians', (req, res) => {
	const { musician } = req.param
	res.send({
		succes: true,
	})
})

app.post('/api/profile/updateInitialData', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	const data = req.body
	res.send({
		sucess: true,
		message: 'All good. Datele or venit',
	})
})

app.listen(5000, () => console.log('server running on port 5000...'))
