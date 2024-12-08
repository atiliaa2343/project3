const express = require('express'); 
const {getMembers, createMember, updateMember, deleteMember } = require('../controllers/members'); 
const router = express.Router(); 

router.get('/', getMembers); 
router.post('/', createMember); 
router.put('/:id', updateMember); 
router.delete('/:id', deleteMember); 

module.exports = router;