import { Router } from 'express'
import {
  Index,
  Show,
  Create,
  Update,
  Remove
} from '../controllers/userController'

const router = Router()

// get all Users
router.get('/', Index)

//Show a User
router.get('/:id', Show)

//Create Users
router.post('/', Create)

//Upload Users
router.put('/:id', Update)

//Remove Users
router.delete('/:id', Remove)

module.exports = router
