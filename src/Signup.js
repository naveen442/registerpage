import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Signupvalidation'
import axios from 'axios';
const Signup = () => {
  const [values,Setvalues] = useState(
    {name:'',email:'',password:''}
    )
  const navigate=useNavigate();
const [errors,SetErrors]=useState({})


const handleSubmit=(event)=>{
event.preventDefault();
const formErrors=Validation(values);
SetErrors( formErrors);
Setvalues({...values,name:'',email:'', password:''});
console.log(values);

if(errors.name==="" && errors.email ==="" && errors.password===""){
axios.post('http://localhost:8081/signup',values).then(res=>{
  console.log(res);
  navigate('/')
}).catch(err=>console.log(err));
}
  }
//   const handleinput=(e)=>{
//     const {name,value} = e.target
// Setvalues({...values,[name]: value})
//   }
const handleinput=(event)=>{
  Setvalues(prev=>({...prev,[event.target.name]:event.target.value
  }))
}
  return (
    <div className=' d-flex justify-content-center align-items-center bg-info vh-100'>
      <div className='bg-white p-5 rounded w-25'>
        <h2 className='text-center'>Sign-up</h2>
        <form action="" onSubmit={handleSubmit}>
    <div className='mb-3'>
        <label htmlFor='Name'><strong>Name</strong></label>
<input type="text" placeholder='Enter Name' className='form-control ' name="name" onChange={handleinput} value={values.name}/>
{errors.name &&<span className='text-danger'>{errors.name}</span>}
    </div>
    <div className='mb-3'>
        <label htmlFor='email'><strong>Email</strong></label>
<input type="email" placeholder='Enter Email' className='form-control ' name="email" onChange={handleinput} value={values.email}/>
{errors.email &&<span className='text-danger'>{errors.email}</span>}
    </div>
    <div className='mb-3'>
        <label htmlFor='Password'><strong>Password</strong></label>
<input type="password" placeholder='Enter Password' className='form-control ' name="password" onChange={handleinput} value={values.password}/>
{errors.password &&<span className='text-danger'>{errors.password}</span>}
    </div>
    <button type="submit" className='btn btn-success w-100'><strong>Signup</strong></button>
    <p>You are agree to your terms and condition</p>
    <Link to="/" className='btn btn-default border w-100 bg-danger text-white text-decoration-none'><strong>Login</strong></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
