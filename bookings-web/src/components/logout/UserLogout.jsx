import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 

const UserLogout = ({ handleLogout }) => {
  return (
    <div>
    <form className={classes.registrationForm} onSubmit={handleLogout}>
        <p>Do you wish to log out?</p>
        <button>Logout</button>
    </form>
    </div>
  );
};

UserLogout.propTypes = {
    handleLogout: PropTypes.func.isRequired,
};

export default UserLogout;
