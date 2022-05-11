import React, {useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const People = () => {

    const [character, setCharacter] = useState()
    const {id} = useParams();
    const [errorImg, setErrorImg] = useState("");


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data)
                setCharacter(response.data)
            })

        .catch(error =>{
            setCharacter()
            setErrorImg('https://www.memesmonkey.com/images/memesmonkey/3f/3fdb8401d7c961058fd4b6b4b2ccf04b.jpeg')
        })
    }, [id]);


    return(
        <div>
            
            {
                
            character? (

                <div>
                    <h2>Name: {character.name}</h2>
                    <h3>Height: {character.height}</h3>
                    <h3>Mass: {character.mass}</h3>
                    <h3>Hair Color: {character.hair_color}</h3>
                    <h3>Skin Color: {character.skin_color}</h3>
                    <h3>Eye Color: {character.eye_color}</h3>
                    <h3>Birth Year: {character.birth_year}</h3>
                    <h3>Gender: {character.gender}</h3>

                </div>
                
            ) : 
            

            <img src={errorImg} alt="Error" />

            }

        </div>
        
    )
} 

export default People;