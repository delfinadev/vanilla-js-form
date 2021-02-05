import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

const Form = () => {
  const [paises, setPaises] = useState([]);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    dni: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/all";
    axios.get(url).then((response) => {
      setPaises(response.data);
      console.log(response)
    });
  }, []);

  function handleOnChangeInputs(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const { nombre, apellido, pais, dni } = values;

  function handleSubmit(event) {
    event.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      pais === "" ||
      dni.trim() === ""
    ) {
      setError(true);
      swal("Error!", "Todos los campos son necesarios", "error");

      return; //asi no se sigue ejecutando el form ya que hay error
    }

    //Eliminar el error
    setError(false);
    swal("Enviado!", "El fromulario se envio con exito", "success");

    setValues({ nombre: "", apellido: "", pais: "", dni: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="column-one">
        <label>
          Nombre<span>*</span>
          <input
            type="text"
            name="nombre"
            onChange={handleOnChangeInputs}
            value={nombre}
          />
        </label>
        <label>
          Seleccione un pais<span>*</span>
          <select id="pais" name="pais" onChange={handleOnChangeInputs}>
            {paises.map((pais, index) => {
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
            name="apellido"
            onChange={handleOnChangeInputs}
            value={apellido}
          />
        </label>
        <label>
          Numero de documento<span>*</span>
          <input
            type="text"
            name="dni"
            onChange={handleOnChangeInputs}
            value={dni}
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
