import React from 'react'; 
import PlaceDetail from '../components/places/PlaceDetail'; 


const PlaceDetail = () => {
    const [loading, setLoading] = useState(true); 

    if(loading) return <h1>Loading...</h1>
    return <PlaceDetail />

}; 

export default PlaceDetail; 