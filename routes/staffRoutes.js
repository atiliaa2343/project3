const express = require('express');
const { getStaff, createStaff, updateStaff, deleteStaff } = require('../controllers/staff');
const router = express.Router();

router.get('/', getStaff);
router.post('/', createStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;
