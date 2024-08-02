import {useParams} from 'react-router-dom';
import { useState, use, useContext } from 'react';
import FormPessoaProprietaria from './FormPessoaProprietaria';
import FormCadastroProprietario from './FormCadastroProprietario';
import FormCadastroPropriedade from './FormCadastroPropriedade';
import { AppContext } from './Components/ThemeContext';

const TelaPerfil = () => {

   const {data, setData} = useContext(AppContext);
   
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedPropriedade, setIsCheckedPropriedade] = useState(false);


    const EventChangeCheckboxPessoa = (e) => {
      setIsChecked(e.target.checked);
    }
    
    const EventChangeCheckBoxPropriedade = (e) => {
        setIsCheckedPropriedade(e.target.checked);
    }

    return (
        <div class="container mt-5">
             <div class="card">
                <div class="card-header">
                     <h3 class="card-title text-center">{data.nome_Usuario}</h3>
                </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle" alt="User Avatar"/>
              <input type="file" id="avatar" class="form-control-file mt-2"/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="form-group">
                <p>Codigo de Proprietário: {data.id_Proprietário}</p>
                <p>Nome do Proprietário: {data.nome_Usuario}</p>
            </div>
           
          </div>
        </div>
        
        <hr/>
            <h2 class="mt-4">Habilitar Conteúdos para o Perfil.</h2>
            <input type="checkbox" name='checkbox' isChecked={isChecked} onChange={EventChangeCheckboxPessoa}/> {isChecked ? 'Desabilitar Cadastro de Pessoa': 'Habilitar  Cadastro de Pessoa'}
            <br/>
            <input type='checkbox' name='checkbox2' isChecked={isCheckedPropriedade} onChange={EventChangeCheckBoxPropriedade}/> {isCheckedPropriedade ? 'Desabilitar Cadastro de Propriedade': 'Habilitar Cadastro de Propriedade'}
    
        {!isChecked ? <hr hidden/>: <hr/>}
        {!isChecked ?  <h2 class="mt-4" hidden>Solicitação para Cadastrar a Pessoa</h2> : <h2 class="mt-4">Solicitação para Cadastrar a Pessoa</h2>}
        {!isChecked ? <p hidden></p> : <FormPessoaProprietaria /> }

       <hr/> 

       <h2 class="mt-4">Solicitação para Cadastro de Proprietário </h2>
       
       <FormCadastroProprietario />

       <hr/> 
        
       {!isCheckedPropriedade ? <p hidden></p> : <FormCadastroPropriedade /> }
       
      </div>
            </div>
    </div>
    );
}

export default TelaPerfil;