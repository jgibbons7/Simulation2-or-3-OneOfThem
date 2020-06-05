require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controllers/controller')
const app = express()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000*60*60*24},
  secret: SESSION_SECRET
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('Goliath online')
  app.listen(SERVER_PORT, () => console.log(`Battlecruiser ${SERVER_PORT} operational`))
}).catch(err => console.log(err))

//ENDPOINTS

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

app.get('/api/posts/:userid', ctrl.getPosts)
app.post('/api/post/:userid')

app.get('api/post/:postid')