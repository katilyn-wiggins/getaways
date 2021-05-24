import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 
import pool from '../images/pool.png'
import {BrowserRouter as Router, Link } from 'react-router-dom'; 



const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
  <Link to={`/${id}`}> 
    <ul className={classes.listitem}>
      <li className={classes.name}>{name}</li>
      <li className={classes.description}>{description}</li>
      {/* <li className={classes.location}>{location}</li> */}
      <li className={classes.price}>${pricePerNight}</li>
      {/* <li className="loc-image"><img src={image}></img></li> */}
      <li><img src={imageThumbnail} className={classes.thumb}></img></li>
      <li className={classes.max}>Sleeps {maxGuests}</li>
      <li className={classes.pets}>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li className={classes.pool}><img src={pool} alt="pool"/>Has a Pool!</li> : null}
      {wifi ? <li><img src={require('../images/wifi.png')}></img></li> : null}
    </ul>
    </Link>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
