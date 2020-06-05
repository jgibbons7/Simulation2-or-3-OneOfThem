const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    const existingUser = await db.check_user(username)
    if (existingUser[0]) {
      return res.status(409).send('You already exist good sir.')
    }

    const salt = bcrypt.genSaltSync(7)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.register_user([username, hash])

    req.session.user = {
      userId: newUser[0].user_id,
      username: newUser[0].username
    }

    res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    const user = await db.check_user(username)
    if(!user) {
      return res.status(404).send('You should register first.')
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password)
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          username: user[0].username,
          profile_pic: user[0].profile_pic
        }
        res.status(200).send(req.session.user)
      } else {
        res.status(403).send('Email or password incorrect')
      }
    }
  },

  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const post = await db.get_posts(req.params.userid)
    let result = post
    // console.log(post)
    if (req.query.title) {
      console.log(result)
      result = result.filter(element => element.title.includes(req.query.title))
    }
    res.status(200).send(result)
    console.log(result)
  }

}