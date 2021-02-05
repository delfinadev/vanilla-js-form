import axios from 'axios'
import {useState, useEffect} from 'react'
import './Form.css'

const Form = () => {
    const [paises, setPaises] = useState([])

    useEffect(() => {
        let url = 'https://restcountries.eu/rest/v2/all'
        axios.get(url).then((response) => {
            setPaises(response.data);
          })
    }, []);

    function eventPrevent(e){
        e.preventDefault()
    }
    console.log(paises)

    return (
        <form onSubmit={eventPrevent} >
            <div className="column-one">
                <label>Nombre<span>*</span>
                    <input type="text" name="nombre" id="nombre" required/>
                </label> 
                <label>
                Seleccione un pais<span>*</span>
                    <select id="pais" name="pais "required>
                         {paises
                         .splice(0,20)
                         .map((pais,index) => 
                            {return (
                             <option value={pais.name} key={index}>{pais.name}</option>
                            )})}         
                     </select>
                </label>
            </div>
            
            <div className="column-two">
                <label>Apellido<span>*</span>
                    <input type="text" name="apellido" id="apellido" required/> 
                </label> 
                <label>Numero de documento<span>*</span>
                    <input type="number" name="dni" id="documento" required/>
                </label>
            </div>

            <div className="btn">
                <input type="submit" value=""/>
                <input type="submit" value=""/>
            </div>
        </form>
    )
}

export default Form
