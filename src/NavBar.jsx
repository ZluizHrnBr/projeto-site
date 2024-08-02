
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
           <nav className="navbar  navbar-expand-lg   navbar-dark bg-dark  justify-content-end">
        
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                       <Link className='nav-link' to="/">Tela Inicial</Link>
                    </li>
                <li className="nav-item active">
                    <Link className='nav-link' to="/Sobre">Sobre</Link>
                </li>
                <li className="nav-item dropdown float-right active">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Conteúdos Disponíveis
                    </a>
        <div className="dropdown-menu" aria-label="navbarDropdownMenuLink">
          <Link className='dropdown-item' to="/Aluguel">Reserve por Aqui.</Link>
          <Link className='dropdown-item' to="/LoginProprietario">Login de Proprietário.</Link>
          <a className="dropdown-item" href="#">Mais informações.</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default NavBar;