import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import classes from '../../src/components/app/app.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getPlaces()
    .then(setPlaces)
    .finally(() => setLoading(false)); 
  }, []);
  
  if (loading) return <h1>Loading...</h1>
  return (
  <div className={classes.listcontainer}>
    <PlaceList places={places} />
  </div>);
};

export default Getaways;
