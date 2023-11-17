const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const usersSchema = new mongoose.Schema({
     fullname:{
        type: String,
        required:[true, "Please enter fullname"]
     },
     email:{
        type: String,
        required:[true, "Please enter email"]
     },
     phone:{
        type: Number,
        required:[true, "Please enter phone number"]
     },
     password:{
        type: String,
        required:[true, "Please enter password"]
     },
     address:{
        type: String,
        required:[true, "Please enter address"]
     },
     
    },
    {
      timestamps: true,
    }
   
    )
     //Hashing of password
     usersSchema.pre('save', async function(next){
      const salt = await bcrypt.genSalt(10) 
      this.password = await bcrypt.hash(this.password, salt)
      next()
   })

   // Verify password
   usersSchema.methods.isPasswordMatch = async function (enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password)
   }
   
const Users = mongoose.model("people", usersSchema)
module.exports = Users