const express = require('express');
const router = express.Router()
const { getAll, addItem, deletItem,deletAllItems,updateItem } = require('../controllers/Item.controller')



/// * ------------------------- Item Route

/* ! @Route  : GET => api/item
     Desc    : Get all Items 
     @Access : Pubic
*/
router.get('/', getAll)

/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/
router.post('/', addItem)

/* ! @Route  : POST => api/item/id
     Desc    : Delete Item
     @Access : Pubic
*/
router.delete('/:id', deletItem)

/* ! @Route  : DELETE => api/item/
     Desc    : Delete All items
     @Access : Pubic
*/
router.delete('/',deletAllItems)

// /* ! @Route  : UPDATE => api/item/:id
//      Desc    : UPDATE  item
//      @Access : Pubic
// */
// router.put('/:id',updateItem)



module.exports = router;