import { Router } from 'express'
import * as candiesCtrl from '../controllers/candies.js'

const router = Router()

// GET localhost:3000/candies
router.get('/', candiesCtrl.index)
// GET localhost:3000/candies/new
router.get('/new', candiesCtrl.new)
// POST localhost:3000/candies
router.post('/', candiesCtrl.create)

export { router }
