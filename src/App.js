import {Outlet, Link} from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
        <NavBar/>
          <div className='text-center'>
            <h2>Seja bem-vindo ao Site para aluguel de propriedades </h2>
          </div>
        <hr/>
        <Outlet/>
    </div>
  );
}

export default App;
