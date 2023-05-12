import React, { useState } from 'react'
import { EmailOutlined } from '@mui/icons-material';
import { LockOutlined } from '@mui/icons-material';
import { VisibilityOutlined } from '@mui/icons-material';
import { VisibilityOffOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

export default function LogIn() {
  const [visibility, setVisibility] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
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
        <h3 className="login__title">Login</h3>
        <div className="login__form">
          <div className="login__form-cols">
            <EmailOutlined className='login__icon'/>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email'/>
          </div>
          <div className="login__form-cols">
            <LockOutlined  className='login__icon'/>
          <input onChange={(e)=> setPassword(e.target.value)} type={!visibility ? 'password' : 'text'} placeholder='password'/>
          {!visibility ? <VisibilityOutlined onClick={()=> setVisibility(true)} className='login__visiblity'/> : <VisibilityOffOutlined onClick={()=> setVisibility(false)} className='login__visiblity'/>}
          </div>
          <p className="login__form-cols error__message">{error}</p>
          <div className="login__form-cols">
            <button onClick={handleSubmit} className="login__btn">login</button>
          </div>
          
          
        </div>
        <div className="login__link">
          <span>don't have an account?</span>
          <Link className='link' to='/signup'>
            SignUp
          </Link>
        </div>
        </div>
    </div>
    </>
  )
}
