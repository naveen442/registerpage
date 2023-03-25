import {React,useState }from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Validation from './Loginvalidation';
import axios from 'axios';
const Login = () => {
  const [values,Setvalues] = useState({
    email:'',
    password:''
  })
  const [errors,SetErrors]=useState({})
  const navigate=useNavigate();


const handleSubmit=(event)=>{
event.preventDefault();
SetErrors(Validation(values));
Setvalues({...values,email:'', password:''});
if(errors.email ==="" && errors.password===""){
  axios.post('http://localhost:8081/login',values).then(res=>{
    console.log(res);
if(res.data==="success"){
  navigate('/home')
}
else{
  alert('no record existed')
}
  }).catch(err=>console.log(err));
  }
console.log(values);

  }
//   const handleinput=(e)=>{
//     const {name,value} = e.target
// Setvalues({...values,[name]: value})
//   }
const handleinput=(event)=>{
  Setvalues(prev=>({...prev,[event.target.name]:event.target.value}))
}
  return (
    <div className=' d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-5 rounded w-25'>
        <h2 className='text-center'>Log-in</h2>
        <form action="" >
    <div className='mb-3'>
        <label ><strong>Email</strong></label>
<input type="email" placeholder='Enter Email' className='form-control ' name="email" onChange={handleinput} value={values.email}/>
{errors.email &&<span className='text-danger'>{errors.email}</span>}
    </div>
    <div className='mb-3'>
        <label ><strong>Password</strong></label>
<input type="password" placeholder='Enter Password' className='form-control ' name="password" onChange={handleinput} value={values.password}/>
{errors.password &&<span className='text-danger'>{errors.password}</span>}
    </div>
    <button type="submit" className='btn btn-success w-100' onClick={handleSubmit} ><strong>Login</strong></button>
    <p>You are agree to your terms and condition</p>
    <Link to="/Signup" className='btn btn-default border w-100 bg-danger text-white text-decoration-none'><strong>Create Account</strong></Link>
        </form>
      </div>
    </div>
  )
} 

export default Login
