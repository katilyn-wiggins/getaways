import React, { useState, useEffect } from 'react';
import UserLogout from '../components/logout/UserLogout'

const Logout = () => {
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true); 

  
  const handleLogout = (e) => {
    e.preventDefault(); 
    setUser({})
    // console.log(user); 
    // setLoading(false); 
  }
 
  // if (loading) return <h1>Loading...</h1>
  return (
  <div>
    <UserLogout 
    handleLogout={handleLogout} 
     />
  </div>);
};

export default Logout;
