import React from 'react'
import { UserAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const {user, logout} = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
    <div className="main">
      <h3 className="main__title">Profile</h3>
      <div className="main__show-email">Email: {user && user.email}</div>
      <button onClick={handleLogout} className="main__out login__btn">Log Out</button>
    </div>

    </>
  )
}
