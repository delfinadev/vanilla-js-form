import axios from 'axios'
import {useState, useEffect} from 'react'

const Form = () => {
    const [paises, setPaises] = useState([])

    useEffect(() => {
        let url = 'https://restcountries.eu/rest/v2/all'
        axios.get(url).then((response) => {
            setPaises(response.data);
          })
    }, []);

    console.log(paises)

    return (
        <form >
            <div className="column-one">
                <h3>Nombre<span>*</span></h3>
                <input type="text" name="" id=""/>  
                <h3>Seleccione un pais<span>*</span></h3>
                <input type="select" name="" id=""/> 
            </div>
            
            <div className="column-two">
                <h3>Apellido<span>*</span></h3>
                <input type="text" name="" id=""/>  
                <h3>Numero de documento<span>*</span></h3>
                <input type="number" name="" id=""/>
            </div>

            <div className="btn">
                <input type="submit" value=""/>
                <input type="submit" value=""/>
            </div>
        </form>
    )
}

export default Form