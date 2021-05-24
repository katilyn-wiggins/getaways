import React, { useState, useEffect } from 'react';
import classes from '../../src/components/app/app.css';
import UserLogin from '../components/login/UserLogin'

const Login = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true); 


//   useEffect(() => {
//     getPlaces()
//     .then(setPlaces)
//     .finally(() => setLoading(false)); 
//   }, []);
  
//   if (loading) return <h1>Loading...</h1>
  return (
  <div>
    <UserLogin />
  </div>);
};

export default Login;
