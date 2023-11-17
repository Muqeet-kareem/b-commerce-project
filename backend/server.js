const express = require ('express')
const app = express()
const mongoose = require ("mongoose")
const  dotenv = require('dotenv')
dotenv.config()
const adminRouter = require('./route/AdminRoute')
const usersRouter = require('./route/UsersRoute')

// connect server to the database
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("Database successfully connected");
 })
 .catch((error)=>{
     console.log(error);
 })

// Middleware for Post http method
app.use(express.json())

// Middleware for admin routers
app.use('/api', adminRouter)

// Middleware for users routers
app.use('/api', usersRouter)


let PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`);
}) 