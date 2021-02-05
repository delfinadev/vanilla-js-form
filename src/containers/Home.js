import Form from '../Components/Form'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <h2>Informacion del formulario</h2>
            <span className="instructions">Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</span>
            <Form />
            <footer>
                <span>ePayco © 2011 - 2019 todos los derechos reservados. </span>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </footer>
        </div>
    )
}

export default Home
