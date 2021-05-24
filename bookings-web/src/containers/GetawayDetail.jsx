import React, { useState, useEffect } from 'react'; 
import PlaceDetail from '../components/places/PlaceDetail'; 
import { getPlace } from '../services/placesApi';
import { useParams } from 'react-router-dom'



const GetawayDetail = () => {
    const [loading, setLoading] = useState(true); 
    const [place, setPlace] = useState({})

    let { id } = useParams();
    
    useEffect(() => {
        getPlace(id) 
        .then((place) => setPlace(place))
        .finally(() => setLoading(false)); 
    }, []); 

    console.log(place); 

    if(loading) return <h1>Loading...</h1>
    return <PlaceDetail {...place}/>

}; 

export default GetawayDetail; 