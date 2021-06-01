import React, { useState, useEffect } from 'react';
import classes from '../../src/components/app/app.css';
import UserRegistration from '../components/registration/UserRegistration'
import { NewUser } from '../services/usersApi'; 

const User = () => {
  // const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true); 
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(userName, email, password);
    // setUser({
    //   userName,
    //   email,
    //   password
    // });
    // console.log(user); 
    NewUser({
      userName,
      email,
      password
    })
    .then (setLoading(false)) 
    .then (alert('new user created'));
  }

  const handleUserNameChange = (e) => (setUserName(e.target.value))
  const handleEmailChange = (e) => (setEmail(e.target.value))
  const handlePasswordChange = (e) => (setPassword(e.target.value))
 

  // if (loading) return <h1>Loading...</h1>
  return (
  <div>
    <UserRegistration 
    handleSubmit={handleSubmit} 
    userName={userName} 
    handleUserNameChange={handleUserNameChange}
    email={email} 
    handleEmailChange={handleEmailChange}
    password={password} 
    handlePasswordChange={handlePasswordChange}
     />
  </div>);
};

export default User;
