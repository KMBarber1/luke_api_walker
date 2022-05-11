import React, {useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


const Vehicle = () => {

    const [tranportation, setTransportation] = useState()
    const {id} = useParams();
    const [errorImg, setErrorImg] = useState("");


    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
            .then(response => {
                console.log(response.data)
                setTransportation(response.data)
            })

        .catch(error =>{
            setTransportation()
            setErrorImg('https://www.memesmonkey.com/images/memesmonkey/3f/3fdb8401d7c961058fd4b6b4b2ccf04b.jpeg')
        })
    }, [id]);


    return(
        <div>

            {

            tranportation ?(

                <div>

                    <h2>Name: {tranportation.name}</h2>
                    <h3>Model: {tranportation.modelt}</h3>
                    <h3>Manufacturer: {tranportation.manufacturer}</h3>
                    <h3>Cost in Credits: {tranportation.cost_in_credits}</h3>
                    <h3>length: {tranportation.length}</h3>
                    <h3>Max Speed: {tranportation.max_atmosphering_speed}</h3>
                    <h3>Crew: {tranportation.crew}</h3>
                    <h3>Passangers: {tranportation.passangers}</h3>
                    <h3>Vehicle Class: {tranportation.vehicle_class}</h3>

                </div>

            ) : 
            
            <img src={errorImg} alt="Error" />

        }

        </div>
        
    )
} 

export default Vehicle;