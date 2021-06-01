import React, { useState, useEffect } from 'react';
import { getPlaces, getTotalPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Pagination from '../components/pagination/Pagination'; 
import classes from '../../src/components/app/app.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [limit, setLimit ] = useState(5); 
  const [totalPlaces, setTotalPlaces] = useState(null); 

  useEffect(() => {
    getPlaces(5, currentPage)
    .then(setPlaces)
    .finally(() => setLoading(false)); 
  }, []);
  
  useEffect(() => {
    getTotalPlaces()
    .then(setTotalPlaces)
    .finally(() => setLoading(false)); 
  }, []);

const lastPage = totalPlaces / limit; 
console.log(lastPage); 

const handleButtonClick = ({ target }) => {
  if(target.value === 'next') {
    setCurrentPage(currentPage + 1); 
    getPlaces(5, currentPage + 1)
    .then(setPlaces)

  } else {
    setCurrentPage(currentPage - 1);
    getPlaces(5, currentPage - 1)
    .then(setPlaces)
  }
}; 

  if (loading) return <h1>Loading...</h1>
  return (
  <div className={classes.listcontainer}>
    <Pagination 
    onClick={handleButtonClick} 
    currentPage={currentPage} 
    lastPage={lastPage}
    /> 
    <PlaceList places={places} />
  </div>);
};

export default Getaways;
