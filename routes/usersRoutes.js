const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  createUsers,
  getUser,
  updateUsers,
  deleteUsers
} = require('../controllers/usersController')

router.route('/').get(getAllUsers).post(createUsers)
router.route('/:id').get(getUser).patch(updateUsers).delete(deleteUsers)


module.exports = router