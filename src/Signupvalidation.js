import React from 'react'

function Validation(values){
let error={}
const email_pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const password_pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

if(values.name===""){
  error.name="Name should not be empty"
}
else{
    error.name=""
  }
if(values.email===""){
    error.email="Email should not be empty"
  }
else if(!email_pattern.test(values.email))
{
error.email="Email does not match"
}
else{
  error.email=""
}
if(values.password==="")
{
  error.password="Password should not be empty"
}
else if(!password_pattern.test(values.password))
{
error.password="password does not match"
}
else{
  error.password=""
}
return error
}
export default Validation;