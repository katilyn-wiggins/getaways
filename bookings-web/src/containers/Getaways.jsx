import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Pagination from '../components/pagination/Pagination'; 
import classes from '../../src/components/app/app.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [perPage, setPerPage] = useState(5); 
  const [limit, setLimit ] = useState(5); 
  const [page, setPage] = useState(1); 

  useEffect(() => {
    getPlaces(5, currentPage)
    .then(setPlaces)
    .finally(() => setLoading(false)); 
  }, []);
  

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

// const paginatedPlaces = setIndex(currentPage, perPage, places); 
const lastPage = places.length / perPage; 



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
