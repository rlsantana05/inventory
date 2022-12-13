const Items = require('../models/ItemSchema')

// GET : Get All Items | /api/v1/items
const getAllItems = (req, res) => {
  res.send('get all items now')
}

// POST : Create Items | /api/v1/items
const createItem = async (req, res) => {
  const item = await Items.create({
  "modelNumber": "S-4859",
  "description": "Corrugate Box",
  "PlaqueCapacity": 2,
  "length": 18,
  "width": 12,
  "height": 4,
  "qty": 25,
  "unitePrice": 1.80
})
  res.status(201).json({item})
}

// GET : Get Single Items | /api/v1/items/:id
const getItem = (req, res) => {
  res.send('get items')
}

// PATCH : Update Items  | /api/v1/items/:id
const updateItem = (req, res) => {
  res.send('Update Item')
}

// DELETE : Delete Items | /api/v1/items/:id
const deleteItem = (req, res) => {
  res.send('Delete Item')
}
module.exports = {getAllItems,createItem,getItem,updateItem,deleteItem}