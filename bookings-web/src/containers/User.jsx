import React, { useState, useEffect } from 'react';
import classes from '../../src/components/app/app.css';
import UserRegistration from '../components/registration/UserRegistration'
import { NewUser } from '../services/usersApi'; 

const User = () => {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('katie');
  const [email, setEmail] = useState('katie@k.com');
  const [password, setPassword] = useState('hi');
  const [loading, setLoading] = useState(true); 


  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setUser({
      userName,
      email,
      password
    })
    // console.log(user); 
    NewUser(user); 
  }

  const handleUserNameChange = (e) => (setUserName(e.target.value))
  console.log(user);


  return (
  <div>
    <UserRegistration handleSubmit={handleSubmit} userName={userName} handleUserNameChange={handleUserNameChange} />
  </div>);
};

export default User;
