import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 
import pool from '../../../public/images/pool.png'; 
import wifi from '../../../public/images/wifi.png'; 
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
  <Link to={`/${name}`} style={{ textDecoration: 'none' }}> 
    <ul className={classes.listitem}>
      <li className={classes.name}>{name}</li>
      <li className={classes.description}>{description}</li>
      {/* <li className={classes.location}>{location}</li> */}
      <li className={classes.price}>${pricePerNight}</li>
      {/* <li className="loc-image"><img src={image}></img></li> */}
      <li><img src={imageThumbnail} className={classes.thumb}></img></li>
      <li className={classes.max}>Sleeps {maxGuests}</li>
      <li className={classes.pets}>{petFriendly ? 
      <img className={classes.pets} src='../../../public/images/pawprint.png' alt="property is pet friendly"/> 
      : <img className={classes.nopets} src='../../../public/images/no-pets.png' alt="property is not pet friendly"/> 

      }</li>
      {pool ? <li><img className={classes.pool} src='../../../public/images/pool.png' alt="property has pool"/></li> : null}
      {wifi ? <li><img className={classes.wifi} src='../../../public/images/wifi.png' alt="property has wifi"></img></li> : null}
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
