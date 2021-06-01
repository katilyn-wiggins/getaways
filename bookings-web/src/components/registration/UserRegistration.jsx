import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 

const UserRegistration = ({ handleSubmit, handleUserNameChange, userName, handleEmailChange, email, handlePasswordChange, password }) => {
  return (
    <div>
    <h1>Register</h1>
    <form className={classes.registrationForm} onSubmit={handleSubmit}>
        <label htmlFor="userName">Username: </label>
        <input required type="text" id="userName" value={userName} onChange={handleUserNameChange}/>
        <label htmlFor="email">Email: </label>
        <input required type="email" id="email" value={email} onChange={handleEmailChange}/>
        <label htmlFor="password">Password: </label>
        <input required type="password" id="password" value={password} onChange={handlePasswordChange}/>
        <button>Submit</button>
    </form>
    </div>
  );
};

UserRegistration.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUserNameChange: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default UserRegistration;
