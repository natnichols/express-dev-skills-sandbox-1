import { Router } from 'express'

const router = Router()

// GET localhost:3000/candies
router.get('/', function(req, res) {
  res.render('candies/index', {
    candies: candies
  })
})
// GET localhost:3000/candies

export { router }
