import React, {useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Species = () => {

    const [type, setType] = useState()
    const {id} = useParams();
    const [errorImg, setErrorImg] = useState("");


    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then(response => {
                console.log(response.data)
                setType(response.data)
            })

        .catch(error =>{
            setType()
            setErrorImg('https://www.memesmonkey.com/images/memesmonkey/3f/3fdb8401d7c961058fd4b6b4b2ccf04b.jpeg')
        })
    }, [id]);


    return(
        <div>

            {

            type ? (

                <div>

                    <h2>Name: {type.name}</h2>
                    <h3>Classification: {type.classification}</h3>
                    <h3>Designation: {type.designation}</h3>
                    <h3>Average Height: {type.average_height}</h3>
                    <h3>Skin Colors: {type.skin_colors}</h3>
                    <h3>Hair Colors: {type.hair_colors}</h3>
                    <h3>Eye Colors: {type.eye_colors}</h3>
                    <h3>Average Lifespan: {type.average_lifespan}</h3>
                    <h3>Homeworld: {type.homeworld}</h3>

                </div>
                
            ) : 
            
            <img src={errorImg} alt="Error" />

            }

        </div>
        
    )
} 

export default Species;