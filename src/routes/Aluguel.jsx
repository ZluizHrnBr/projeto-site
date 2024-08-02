import React, { useState } from 'react';
import Input from './Components/Input';



function Aluguel() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [busca, setBusca] = useState('');

  const handleCheckInChange = (event) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOut(event.target.value);
  };

  const handleChangeBusca = (event) => {
    setBusca(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Check-in:', checkIn);
    console.log('Check-out:', checkOut);
    console.log('Adults:', adults);
    console.log('Children:', children);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>Apartamentos & Suítes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Acomodações Disponíveis</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="checkIn">Check-in</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkIn"
                  value={checkIn}
                  onChange={handleCheckInChange}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="checkOut">Check-out</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOut"
                  value={checkOut}
                  onChange={handleCheckOutChange}
                />
              </div>
              <div className='form-row'>
                <div className='form-group col-lg-25'>
                  <label>
                     Busca por Apartamentos  
                  </label>  
                  <Input Tipo='text' Nome='busca' onChange={handleChangeBusca}/>
              </div>
            </div>
            </div>
           
            <button type="submit" className="btn btn-primary">Pesquisar</button>
            
          </form>
        </div>
        <br/>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Suíte Júnior</h5>
              <p className="card-text">
                Nossas Suítes Júnior oferecem vistas panorâmicas da cidade de tirar o fôlego.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tamanho: 260 ft²</li>
                <li className="list-group-item">Camas: 2 Casal</li>
              </ul>
              <div className="card-footer">
                <p className="card-text">A partir de <span className="price">$250</span></p>
                <button className="btn btn-primary">Mais Informações</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Quarto Standard</h5>
              <p className="card-text">
                Nossos Quartos Standard são a combinação perfeita de funcionalidade e conforto.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tamanho: 230 ft²</li>
                <li className="list-group-item">Camas: 1 Casal</li>
              </ul>
              <div className="card-footer">
                <p className="card-text">A partir de <span className="price">$150</span></p>
                <button className="btn btn-primary">Mais Informações</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aluguel;