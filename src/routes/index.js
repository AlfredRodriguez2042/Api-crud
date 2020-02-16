import { Router } from 'express'
import article from './article'
import user from './user'
import comment from './comment'

const router = Router()

router.use('/user', user)
router.use('/article', article)
router.use('/article/:id', comment)

const route = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return
    const route = require(`./${file}`)
    console.log(route)
    app.use(route).use(route.allowedMethods())
  })
}

export default router
