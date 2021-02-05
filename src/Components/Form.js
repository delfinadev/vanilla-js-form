import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

const Form = () => {
  const [paises, setPaises] = useState([]);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    dni: "",
  });

  // const [error, setError] = useState(false);

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/all";
    axios.get(url).then((response) => {
      setPaises(response.data);
    });
  }, []);

  // const { nombre, apellido, pais, dni } = values;

  function handleOnChange(e) {
    setValues({
      ...values,
      [e.target.value]: e.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="column-one">
        <label>
          Nombre<span>*</span>
          <input
            type="text"
            name=""
            id="nombre"
            onChange={(e) => {
              handleOnChange(e);
            }}
            // value={nombre}
          />
        </label>
        <label>
          Seleccione un pais<span>*</span>
          <select id="pais">
            {paises.splice(0, 20).map((pais, index) => {
              return (
                <option key={index} value={pais.name}>
                  {pais.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <div className="column-two">
        <label>
          Apellido<span>*</span>
          <input
            type="text"
            name=""
            id="apellido"
            onChange={(e) => {
              handleOnChange(e);
            }}
            // value={apellido}
          />
        </label>
        <label>
          Numero de documento<span>*</span>
          <input
            type="text"
            name=""
            id="documento"
            onChange={(e) => {
              handleOnChange(e);
            }}
            // value={dni}
          />
        </label>
      </div>

      <button type="submit" className="btn-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Form;
