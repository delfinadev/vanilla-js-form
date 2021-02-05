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
    });
  }, []);

  const { nombre, apellido, pais, dni } = values;

  function handleOnChange(event) {
    [event.target.value] = event.target.value;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //Validar
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      pais.trim() === "" ||
      dni.trim() === ""
    ) {
      setError(true);
      swal("Error!", " Agregaste  al carrito de compras!", "error");
      return; //asi no se sigue ejecutando el form ya que hay error
    }
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="column-one">
        <h3>
          Nombre<span>*</span>
        </h3>
        <input type="text" name="" id="" />
        <h3>
          Seleccione un pais<span>*</span>
        </h3>
        <input type="select" name="" id="" />
      </div>

      <div className="column-two">
        <h3>
          Apellido<span>*</span>
        </h3>
        <input type="text" name="" id="" />
        <h3>
          Numero de documento<span>*</span>
        </h3>
        <input type="number" name="" id="" />
      </div>

      <button type="submit" className="btn-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Form;
