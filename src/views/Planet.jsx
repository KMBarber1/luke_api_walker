import React, {useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Planet = () => {

    const [location, setLocation] = useState()
    const {id} = useParams();
    const [errorImg, setErrorImg] = useState("");
    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setLocation(response.data)
            })
    
        .catch(error =>{
            setLocation()
            setErrorImg('https://www.memesmonkey.com/images/memesmonkey/3f/3fdb8401d7c961058fd4b6b4b2ccf04b.jpeg')
        })
    }, [id]);
    

    return(
        <div>

            {
                
            location ? (

                <div>

                    <h2>Name: {location.name}</h2>
                    <h3>Diameter: {location.diameter}</h3>
                    <h3>Climate: {location.climate}</h3>
                    <h3>Gravity: {location.gravity}</h3>
                    <h3>Terrain: {location.terrain}</h3>
                    <h3>Surface_water: {location.surface_water}</h3>
                    <h3>Population: {location.population}</h3>
                    
                </div>

            ) : 
            
            <img src={errorImg} alt="Error" />

            }

        </div>
        
    )

}

export default Planet;