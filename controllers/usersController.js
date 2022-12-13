const getAllUsers = (req, res) => {
  res.send('Get All Users')
}
const createUsers = (req, res) => {
  res.send('Create User')
}
const getUser = (req, res) => {
  res.send('Get a Single User')
}
const updateUsers = (req, res) => {
  res.send('Update User')
}
const deleteUsers = (req, res) => {
  res.send('Delete user')
}

module.exports = {
  getAllUsers,
  createUsers,
  getUser,
  updateUsers,
  deleteUsers
}