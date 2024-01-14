import { Candy } from '../models/candy.js'

function index(req, res) {
  Candy.find({}).then(candies => {
    res.render('candies/index', {
      candies: candies,
      time: req.time
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

function show(req, res) {
  Candy.findById(req.params.candyId).then(candy => {
    res.render('candies/show', {
      candy: candy
    })
  })
  .catch(err => {
    console.log(`💥`, err)
    res.redirect('/candies')
  })
}

function deleteCandy(req, res) {
  Candy.findByIdAndDelete(req.params.candyId).then(candy => {
    res.redirect('/candies')
  })
  .catch(err => {
    console.log(`💥`, err)
    res.redirect('/candies')
  })
}

function edit(req, res) {
  // req.body.inPantry = !!req.body.inPantry
  Candy.findById(req.params.candyId).then(candy => {
    res.render('candies/edit', {
      candy: candy
    })
  })
  .catch(err => {
    console.log(`💥`, err)
    res.redirect('/candies')
  })
}

function update(req, res) {
  req.body.inPantry = !!req.body.inPantry
  Candy.findByIdAndUpdate(req.params.candyId, req.body, {new: true}).then(candy => {
    res.redirect(`/candies/${candy._id}`)
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
  show,
  deleteCandy as delete,
  edit,
  update,
}