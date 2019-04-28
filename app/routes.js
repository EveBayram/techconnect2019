const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.redirect('/start')
})
// Add your routes here - above the module.exports line

module.exports = router
