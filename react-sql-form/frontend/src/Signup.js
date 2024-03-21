import React, {useState} from 'react'
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
    .then(res => console.log("Registered Successfully"))
    .catch(err => console.log(err));

  }

  return (
    <div className='justify-content-center bg-secondary d-flex align-items-center vh-100'>
      <div className='bg-white rounded p-2 w-25'>
        <h2 className='justify-content-center d-flex'>
            Sign-Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input name='name' type='text' placeholder='Enter Name' className='form-control rounded-0' onChange={handleChange}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input name='email' type='email' placeholder='Enter Email' className='form-control rounded-0' onChange={handleChange}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input name='password' type='password' placeholder='Enter Password' className='form-control rounded-0' onChange={handleChange}></input>
          </div>
          <button className='rounded-0 btn btn-success w-100' type='submit'>Sign Up</button>
          <p>Agree to the terms and condition</p>
          <a to='/' className='btn btn-default border text-decoration-none w-100 rounded-0 bg-light'>Login</a>
        </form>
      </div>
    </div>
  )
}

export default Signup
