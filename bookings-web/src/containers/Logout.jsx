import React, { useState, useEffect } from 'react';
import UserLogout from '../components/logout/UserLogout'
import { LogoutUser } from '../services/usersApi'

const Logout = () => {
  // const [loading, setLoading] = useState(false); 

  
  const handleLogout = (e) => {
    e.preventDefault(); 
    LogoutUser(); 
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
