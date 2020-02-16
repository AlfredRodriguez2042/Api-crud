import { Router } from 'express'
import comment from './comment'
import {
  Index,
  Show,
  Create,
  Update,
  Remove
} from '../controllers/articleController'

const router = Router()

// get all Articles
router.get('/', Index)

//Show a Article
router.get('/:id', Show)

//Create Article
router.post('/', Create)

//Upload Article
router.put('/:id', Update)

//Remove Article
router.delete('/:id', Remove)

module.exports = router
