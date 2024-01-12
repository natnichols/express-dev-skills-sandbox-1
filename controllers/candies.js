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

function newCandy(req, res) {
  res.render('candies/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.inPantry = false
  Candy.create(req.body).then(candy => {
    res.redirect('/candies')
  })
  .catch(err => {
    console.log(`💥`, err)
    res.redirect('/candies')
  })
}

export {
  index,
  newCandy as new,
  create,
}