///* ------------------------- Item Model
// -------------require models----------  //
const { findByIdAndUpdate } = require('../models/items.model')
const Item = require('../models/items.model')
// -------------require validations----------  //
const { itemValidation } = require('../validations/item.validation')
/* ! @Route  : GET => api/items
     Desc    : Get all Items
     @Access : Pubic
*/
exports.getAll = async (req, res) => {
  //! .sort date:-1 pour avoir la DB en ordre decroissant
  try {
    const all = await Item.find().sort({ date: -1 })
    all && res.status(200).json(all)
  } catch (error) {
    res.status(400).json(err)
  }
}


/* ! @Route  : POST => api/items
     Desc    : Create Item
     @Access : Pubic
*/
exports.addItem = async (req, res) => {
  const { error } = itemValidation(req.body)
  error && res.status(400).json(error.details[0].message)
  const item = new Item({ ...req.body })
  try {
    const addItem = await item.save()
    addItem && res.status(201).json(item)
  } catch (error) {
    res.status(400).json(err)
  }
}
/* ! @Route  : DELETE => api/items/:id
     Desc    : Delete Item
     @Access : Pubic
*/
exports.deletItem = async (req, res) => {
  const { id } = req.params
  try {
    const deletItem = await Item.findById(id)
    if (deletItem) {
      await deletItem.remove()
      res.json({ message: "l'itém avec le nom " + deletItem.name + " est supprimer avec succée" })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
/* ! @Route  : DELETE => api/item/
     Desc    : Delete All items
     @Access : Pubic
*/

exports.deletAllItems = async (req, res) => {
  try {
    const deletMany = await Item.deleteMany()
    deletMany && res.status(200).json({ message: "0 element veiller rajouter un element a la todo liste" })
  } catch (error) {
    res.status(500).json({ error })
  }
}
/* ! @Route  : UPDATE => api/item/:id
     Desc    : Update item
     @Access : Pubic
*/
// exports.updateItem = async (req, res) => {
//   // const { id } = req.params
//   // const { error } = itemValidation(req.body)
//   // error && res.status(400).json(error.details[0].message)
//   //    findByIdAndUpdate( id ,req.body, {useFindAndModify:false})
//   //    .then()

// }
