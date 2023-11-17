const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
     fullname:{
        type: String,
        required:[true, "Please enter fullname"]
     },
     email:{
        type: String,
        required:[true, "Please enter email"]
     },
     password:{
        type: String,
        required:[true, "Please enter password"]
     },
    },
    {
      timestamps: true,
    }

    )
    //Hashing of password
    adminSchema.pre('save', async function(next){
       const salt = await bcrypt.genSalt(10) 
       this.password = await bcrypt.hash(this.password, salt)
       next()
    })

    // Verify password
    adminSchema.methods.isPasswordMatch = async function (enteredPassword){
         return await bcrypt.compare(enteredPassword, this.password)
    }
    


const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin