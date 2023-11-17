const express = require ('express')
const Admin = require('../model/AdminModel')

//Create Admin
const createNewAdmin = async(req, res)=>{
    try{
        const{fullname, email, password} = req.body
    const existingAdmin = await Admin.findOne({email: email})
    if(existingAdmin){
         return res.json({msg: "Admin already exist", existingAdmin})
    }
    const createAdmin = await Admin.create({fullname, email, password})
    res.status(201).json({msg: "You have been registered", createAdmin})
    }
    catch(err){
        res.send(err)
    }
}

// Fetch single admin
const getOneAdmin = async(req, res)=>{
    try{
         const{id} = req.params
          const getSingleAdmin = await Admin.findone({_id: id})
          res.status(200).json(getSingleAdmin)
    }
    catch(err){
         res.send(err)
    }
 }

 // update admin
 const updateAdmin = async(req, res)=>{
    try{
         const {id} = req.params
         const editAdmin = await Admin.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
         }
        )
        res.status(200) .json({msg:"Record successfully updated", editAdmin})
    }
    catch(err){
        red.send(err) 
    }
}

// Login admin
const loginAdmin = async(req, res)=>{
    try{
        const{email, password} = req.body
        const existingAdmin =  await Admin.findOne({email:email})
        if(existingAdmin && (await existingAdmin.isPasswordMatch(password))){
           return res.json({
             _id: existingAdmin._id,
             fullname: existingAdmin.fullname,
             email: existingAdmin.email,
             password: existingAdmin.password,
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

module.exports = {createNewAdmin, getOneAdmin, updateAdmin, loginAdmin}