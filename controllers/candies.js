import { Candy } from '../models/candy.js'

function index(req, res) {
  Candy.find({}).then(candies => {
    res.render('candies/index', {
      candies: candies
    })
  })
  .catch(err => {
    console.log(`💥`, err)
    res.redirect('/')
  })
}

export {
  index,
}