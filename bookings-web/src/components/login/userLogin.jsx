import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 

const UserLogin = (handleSubmit) => {
  return (
    <div>
    <h1>Login</h1>
    <form className={classes.registrationForm} onSubmit={handleSubmit}>
        <label htmlFor="userName">Username: </label>
        <input type="text" id="userName"/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"/>
        <button>Submit</button>
    </form>
    </div>
  );
};

UserLogin.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default UserLogin;
