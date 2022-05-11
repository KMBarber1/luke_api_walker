import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'


const Form =() =>{

    const [input, setInput] = useState("")
    const [id, setId] = useState("")
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/${input}/${id}`)
    }


    return(

        <form onSubmit={handleSubmit}>
            <div>
            <p>Search for:</p>
            <select name="input" value={input} onChange = {e=>setInput(e.target.value)}>
                <option hidden>Search</option>
                <option value="people">people</option>
                <option value="planets">planet</option>
                <option value="species">species</option>
                <option value="starships">starship</option>
                <option value="vehicles">vehicle</option>
            </select>
            </div>

            <div>
            <p>ID:</p>
            {/* type="number" will give arrows with numbers" */}
            <input type="text" name="id" onChange={(e) => setId(e.target.value)}/>
            <button>Search</button>
            </div>

        </form>

    )

} 

export default Form;