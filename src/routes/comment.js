import { Router } from 'express'
import {
  Index,
  Show,
  Create,
  Update,
  Remove
} from '../controllers/commentController'

const router = Router({ mergeParams: true })

// get all Comments
// router.get('/', Index)

//Show a Comment
router.get('/:id/', Show)

//Create Comments
router.post('/', Create)

//Upload Comment
router.put('/:id', Update)

//Remove Comment
router.delete('/:id', Remove)

module.exports = router
