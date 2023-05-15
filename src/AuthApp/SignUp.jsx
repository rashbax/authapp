import React, { useState } from 'react'
import { UserAuth } from './context/AuthContext'
import { EmailOutlined } from '@mui/icons-material';
import { LockOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {createUser} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if(confirPassword === password){
        await createUser(email, confirPassword)
      
      }else {
        throw new Error('Confirmed password is wrong!')
      }
      navigate('/main')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }
 
  
  return (
    <>
    <div className='login'>
        <div className="login__body">
        <h3 className="login__title">Create Accaunt</h3>
        <form className="login__form"  onSubmit={handleSubmit}>
          <div className="login__form-cols">
            <EmailOutlined className='login__icon'/>
          <input type="text" placeholder='email' onChange={((e)=> setEmail(e.target.value))}/>
          </div>
          <div className="login__form-cols">
            <LockOutlined  className='login__icon'/>
          <input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login__form-cols">
            <LockOutlined  className='login__icon'/>
          <input type='text' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <p className="login__form-cols error__message">{error}</p>
          <div className="login__form-cols">
            <button type='submit' className="login__btn">Sign Up</button>
          </div>
          
        </form>
        <div className="login__link">
          <span>don't have an account?</span>
          <Link className='link' to='/'>
            Sign in
          </Link>
        </div>
        </div>
    </div>
    </>
  )
}
