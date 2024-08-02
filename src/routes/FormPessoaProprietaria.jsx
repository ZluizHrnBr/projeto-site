
import { useState } from "react";
import Input from "./Components/Input"; 
import Instance from "./Components/Instance";
import {useNavigate} from 'react-router-dom';


const FormPessoaProprietaria = () => {

    const Navigate = useNavigate();

    const [Codigo, setCodigo] = useState(0);
    const [NomeProprietario, setNomeProprietario] = useState('');

    const EventChangeCodigo = (e) => {
        setCodigo(e.target.value);
    }

    const FormPessoaProprietaria = {
        id_Pessoa: Codigo,
        nome_Pessoa: NomeProprietario
    }

    const EventChangeNomeProprietario = (e) => {
        setNomeProprietario(e.target.value);
    }

    const EventHandleChangeButtonCadastrarPessoaProprietaria = () => {
        Instance.post('/SalvarPessoaProprietario', FormPessoaProprietaria)
        .then((response) => {
            alert("Cadastro de pessoa proprietária realizado com sucesso !")
            console.log(response.data);
        }).catch((error) => {
            alert("Erro ao cadastrar pessoa proprietária !")
            console.log(error);
        })
    }

    const EventHandleChangeCancelarOperacao = () => {
        return Navigate("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                        <label for="Codigo">
                            Codigo
                        </label>
                        <Input Tipo="number" Nome="Numero" onChange={EventChangeCodigo}/>
          
                        <label for="Proprietario">
                            Nome da Pessoa 
                        </label>

                        <Input Tipo="text" Nome="proprietário" onChange={EventChangeNomeProprietario}/>
     
                        <br/>
                        <div className="d-flex justify-content-between">
                            <button type="button" class="btn btn-success" onClick={EventHandleChangeButtonCadastrarPessoaProprietaria}>Criar Pessoa Proprietária</button>
                            <button type="button" class="btn btn-danger" onClick={EventHandleChangeCancelarOperacao}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </div>
    );
}

export default FormPessoaProprietaria;