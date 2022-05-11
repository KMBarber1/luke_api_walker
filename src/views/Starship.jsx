import React, {useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Starship = () => {

    const [ship, setShip] = useState()
    const {id} = useParams();
    const [errorImg, setErrorImg] = useState("");


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                console.log(response.data)
                setShip(response.data)
            })

        .catch(error =>{
            setShip()
            setErrorImg('https://www.memesmonkey.com/images/memesmonkey/3f/3fdb8401d7c961058fd4b6b4b2ccf04b.jpeg')
        })
    }, [id]);


    return(
        <div>

            {

            ship ? (
                
                <div>

                    <h2>Name: {ship.name}</h2>
                    <h3>Model: {ship.modelt}</h3>
                    <h3>Manufacturer: {ship.manufacturer}</h3>
                    <h3>Cost in Credits: {ship.cost_in_credits}</h3>
                    <h3>length: {ship.length}</h3>
                    <h3>Max Speed: {ship.max_atmosphering_speed}</h3>
                    <h3>Crew: {ship.crew}</h3>
                    <h3>Passangers: {ship.passangers}</h3>
                    <h3>Hyperdrive Rating: {ship.hyperdrive_rating}</h3>
                    <h3>Starship Class: {ship.starship_class}</h3>

                </div>

            ) : 
            
            <img src={errorImg} alt="Error" />

            }

        </div>
        
    )
} 

export default Starship;