import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 

const UserRegistration = (handleSubmit) => {
  return (
    <form className={classes.registrationForm} onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName"/>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName"/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"/>
        <label htmlFor="password">Set Password: </label>
        <input type="password" id="password"/>
        <button>Submit</button>
    </form>
  );
};

UserRegistration.propTypes = {
};

export default UserRegistration;
