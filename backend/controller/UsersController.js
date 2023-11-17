const express = require('express')
const Users = require('../model/UsersModel')

 
// Create user
const createNewUser = async(req, res)=>{
    try{
        const{fullname, email, phone, address, password} = req.body
    const existingUsers = await Users.findOne({email: email})
    if(existingUsers){
         return res.json({msg: "User already exist", existingUsers})
    }
    const createUser = await Users.create({fullname, email, phone, address, password})
    res.status(201).json({msg: "You have been registered", createUser})
    }
    
    catch(err){
        res.send(err)
    }
}

// Fetch all users
const fetchAllUsers = async(req, res)=>{
    try{
    const getAllUsers = await Users.find()
     res.status(200).json(getAllUsers)
    }
    catch(err){
      res.send(err)
    }

}

// Fetch single user
const getOneUser = async(req, res)=>{
    try{
         const{id} = req.params
          const getSingleUser = await Users.findone({_id: id})
          res.status(200).json(getSingleUser)
    }
    catch(err){
         res.send(err)
    }
 }


 // Update user
 const updateUser = async(req, res)=>{
    try{
         const {id} = req.params
         const editUser = await Users.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
         }
        )
        res.status(200) .json({msg:"Record successfully updated", editUser})
    }
    catch(err){
        res.send(err) 
    }
}
// Login user
const loginUser = async(req, res)=>{
    try{
        const{fullname, email, password} = req.body
        const existingUsers = await Users.findOne({email:email})
        if(existingUsers && (await existingUsers.isPasswordMatch(password))){
           return res.json({
             _id: existingUsers._id,
             fullname: existingUsers.fullname,
             email: existingUsers.email,
             password: existingUsers.password,
             msg: "You have successfully login"
           })
        }
        else{
             res.json({msg: "Invalid credentials"})
        }
    }
    catch(err){
    
    }
    }


// Deleting users
const deleteUser = async(req, res)=>{
    try{
         const{id} = req.params
          const deleteSingleUser = await Users.findOneAndDelete({_id: id})
          res.status(200).json({msg: "User record deleted", deleteSingleUser})
    }
    catch(err){
         res.send(err)
    }
 }

module.exports = {createNewUser, fetchAllUsers, getOneUser, updateUser, deleteUser,loginUser}