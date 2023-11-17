import React, {useState} from "react"
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import swal from "sweetalert"


function Login() {

    const [users, setUsers] = useState({
        email:"",
        password:"",

    })

      // Creating a function for the handleInputs
     const handleInputs = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setUsers({...users, [name]:value})
     }

     const navigate = useNavigate()


      // Create a function for handleSubmit
      const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(users.fullname);

        if (users.email === "" || users.password === "" ){
          swal("Empty fields", "Please fill the required fields", "error")
        }
        else{
        axios.post("/api/users/login", users)
        .then((response)=> {
           console.log(response.data.msg);
           localStorage.setItem("users", JSON.stringify(response.data))
           if (response.data.msg === "You have successfully login"){
                    swal("Successfully Login", response.data.msg, "success")
                     navigate('/')
                   }
                   else{
                     swal("Invalid Email/Password", response.data.msg, "error")
                           } 
                    //       //  swal("Successfully registered", "Thank you for registering", "success")
                    // swal(response.data.msg === "You have been registered" ? "Successfully registered" : "User already exist",
                    // response.data.msg, response.data.msg === "You have been registered" ? "success":"error"
                    //       ) 
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
          <dotlottie-player src="https://lottie.host/0d530de7-c2fe-493f-ba2c-ad5d6813dafa/lubOLrvrJT.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
          <div className="col-md-5 offset-md-1 mt-5">
            <form className="shadow py-3 px-4 mb-5 bg-body rounded" onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" value= {users.email} onChange={handleInputs} name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" value= {users.password} onChange={handleInputs} id="exampleFormControlInput1" placeholder="enter password" />
              </div>
              <div class="d-grid gap-2 mb-4">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
              {/* <Link to ='/' className="account">Forgot Password</Link> */}
              <div>
              <Link to ='/register' className="account">Don't have an account? Click here to register an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login