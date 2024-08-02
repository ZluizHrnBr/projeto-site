import { useState } from "react";
import Input from "./Components/Input";
import ButtonCadastrar from './Components/ButtonCadastrar'
import ButtonCancelar from "./Components/ButtonCancelar";
import {useNavigate} from 'react-router-dom';


const FormCadastroPropriedade = () => {
    
    const Navigate = useNavigate();

    const Options = [{value: '1', label: 'Ocupado'}, {value: '2', label: 'Disponível'}, {value: '3', label: 'Reservado'}];

    const EventHandleCadastrarEndereco = () => {
        
    }

    const EventHandleCancelarCadastroEndereco = () => {

    }

    const EventHandleCadastrarPropriedade = () => {

    }

    const EventHandleCancelarCadastroPropriedade = () => {

    }

    return (
        <div>
            <div className="container">
                <h5>Registrar Endereço de Propriedade</h5>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <form className="form-group">
                            <div>
                               <label htmlFor="CodigoEndereco">Código de Endereço</label>
                               <Input Tipo="number" Nome="codigo"/>
                            </div>
                            <div>
                               <label htmlFor="CodigoEndereco">Numeração da Rua</label>
                               <Input Tipo="text" Nome="rua"/>
                            </div>
                            <div>
                               <label htmlFor="Logradouro">Logradouro</label>
                               <Input Tipo="text" Nome="logradouro"/>
                            </div>
                            <div>
                               <label htmlFor="Lote">Lote</label>
                               <Input Tipo="text" Nome="lote"/>
                            </div>
                            <div>
                               <label htmlFor="CodigoEndereco">CEP</label>
                               <Input Tipo="number" Nome="cep"/>
                            </div>
                            
                            <br/>

                            <div className="d-flex justify-content-between">
                                <ButtonCadastrar onClick={EventHandleCadastrarEndereco}/>
                                <ButtonCancelar onClick={EventHandleCancelarCadastroEndereco}/>
                            </div>
                        </form>
                    </div>   
                   
                   
                </div>

                <h5>Registrar Propriedade</h5>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <form className="form-group">
                        <div>
                           <label htmlFor="CodigoPropriedade">Codigo de Propriedade</label>
                           <Input Tipo="number" Nome="codigopropriedade"/>
                        </div>
                        <div>
                           <label htmlFor="NomePropriedade">Nome da Propriedade</label>
                           <Input Tipo="text" Nome="NomePropriedade"/>
                        </div>
                        <div>
                           <label htmlFor="CodigoEndereco">Codigo de Endereço</label>
                           <Input Tipo="number" Nome="CodigoEndereco"/>
                        </div>
                        <div>
                          <label htmlFor='Status'> Status</label>
                          <Input Tipo='text'Nome='status'/>
                        </div>
                        <div>
                            <div>
                                <label>Selecione uma foto:</label>
                                <input type="file" />
                            </div>
                        </div>

                        <br/>

                        <div className="d-flex justify-content-between">
                            <ButtonCadastrar onClick={EventHandleCadastrarPropriedade}/>
                            <ButtonCancelar onClick={EventHandleCancelarCadastroPropriedade}/>
                        </div>
                        
                        </form>
                       
                    </div>      
                </div>
            </div>
        </div>
    );
}

export default FormCadastroPropriedade;