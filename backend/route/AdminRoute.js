const express = require('express')
const router = express.Router()
// const Admin = require('../model/AdminModel')
const {createNewAdmin, getOneAdmin, updateAdmin, loginAdmin} = require ('../controller/AdminController')

// Route for post
router.post('/create', createNewAdmin )
router.get('/admin/:id', getOneAdmin)
router.put('/admin/update/:id', updateAdmin)
router.post('/admin/login', loginAdmin )

module.exports = router