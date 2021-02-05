import './App.css';
import Navbar from './Components/Navbar'
import Home from './containers/Home'
import swal from 'sweetalert'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
