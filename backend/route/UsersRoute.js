const express = require ('express')
const router = express.Router()
const {createNewUser, fetchAllUsers, getOneUser, updateUser, deleteUser, loginUser} = require ('../controller/UsersController')

// Routes
router.post('/users/create', createNewUser )
router.get('/users', fetchAllUsers)
router.get('/users/:id', getOneUser)
router.put('/users/update/:id', updateUser)
router.delete('/users/delete/:id', deleteUser)
router.post('/users/login', loginUser )


module.exports = router