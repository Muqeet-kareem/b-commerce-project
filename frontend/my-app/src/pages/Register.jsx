import React, {useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import swal from "sweetalert"


function Register() {

    const [users, setUsers] = useState({
        fullname:"",
        email:"",
        phone:"",
        password:"",
        address:""

    })

      // Creating a function for the handleInputs
     const handleInputs = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setUsers({...users, [name]:value})
     }

    //  const navigate = useNavigate()


      // Create a function for handleSubmit
      const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(users.fullname);

        if (users.fullname === "" || users.email === "" || users.phone === "" || users.password === "" || users.address === ""){
          swal("Empty fields", "Please fill the required fields", "error")
        }
        else{
        axios.post("/api/users/create", users)
        .then ((response)=>{
          swal(response.data.msg === "You have been registered" ? "Successfully registered" : "User already exist",
          
          response.data.msg, response.data.msg === "You have been registered" ? "success":"error",
          ) 
        })
        .catch((err)=>{
      console.log(err);
        }) 
      }
      }
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 ">
          <dotlottie-player src="https://lottie.host/61903cc6-b887-4534-ab96-9f1bcee53f71/QwE16ocl6y.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
          <div className="col-md-5 offset-md-1 mt-5">
            <form className="shadow py-3 px-4 mb-5 bg-body rounded" onSubmit={handleSubmit}>
            <h3 className="text-center">Register</h3>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                <input type="text" name="fullname" value= {users.fullname} onChange={handleInputs} class="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" value= {users.email} onChange={handleInputs} name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" name="phone" value= {users.phone} onChange={handleInputs} id="exampleFormControlInput1" placeholder="enter phone number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" value= {users.password} onChange={handleInputs} id="exampleFormControlInput1" placeholder="enter password" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                <textarea class="form-control" name="address" value= {users.address} onChange={handleInputs}id="exampleFormControlTextarea1" rows="3" placeholder="enter address"></textarea>
              </div>
              <div class="d-grid gap-2 mb-4">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
              <div>
              <Link to ='/login' className="account">Already have an account? Click here to login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Register