import { candies } from '../data/candy-data.js'

function index(req, res) {
  res.render('candies/index', {
    candies: candies
  })
}

export {
  index,
}