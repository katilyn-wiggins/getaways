import React, { useState, useEffect } from 'react';
import classes from '../../src/components/app/app.css';
import UserRegistration from '../components/registration/UserRegistration'

const User = () => {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true); 

//   useEffect(() => {
//     getPlaces()
//     .then(setPlaces)
//     .finally(() => setLoading(false)); 
//   }, []);
  
//   if (loading) return <h1>Loading...</h1>
  return (
  <div>
    <UserRegistration />
  </div>);
};

export default User;
