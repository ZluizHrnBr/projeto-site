import Input from "./Components/Input";
import { useState } from "react";
import Instance from "./Components/Instance";
import { useNavigate } from "react-router-dom";

const FormCadastroProprietario = () => {

    const [CodigoPessoa, setCodigoPessoa] = useState(0);
    const [Nome_Usuario, setNomeUsuario] = useState(0);
    const [CodigoProprietario, setCodigoProprietario] = useState(0);
    const [Senha, setSenha] = useState("");

    const Navigate = useNavigate();

    const EventHandleCodigoPessoa = (event) => {
        setCodigoPessoa(event.target.value);
    }

    const FormCadastrarProprietario = {
        id_Proprietário: CodigoProprietario,
        id_Pessoa: CodigoPessoa,
        nome_Usuario: Nome_Usuario,
        senha: Senha
    }
    
    const EventHandleNomeProprietario = (event) => {
        setNomeUsuario(event.target.value);
    }

    const EventHandleCodigoProprietario = (event) => {
        setCodigoProprietario(event.target.value);
    }

    const EventHandleSenha = (event) => {
        setSenha(event.target.value);
    }  

    const EventChangeCadastrarProprietario = () => {
        Instance.post('/SalvarProprietario', FormCadastrarProprietario)
        .then((response) => {
            console.log(response.data);
            alert("Cadastro de Proprietário realizado com sucesso!")
        }).catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar Proprietário")
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
                        <form className="form-group">
                            <div>
                                <label htmlFor="CodigoPessoa">Codigo de Pessoa</label>
                                <Input Tipo="number" Nome="number" onChange={EventHandleCodigoPessoa}/>
                            </div>
                            <div>
                                <label htmlFor="CodigoProprietario">Codigo de Proprietario</label>
                                <Input Tipo="number" Nome="number" onChange={EventHandleCodigoProprietario}/>
                            </div>
                            <div>
                                <label htmlFor="NomeUsuario">Nome de pessoa proprietaria</label>
                                <Input Tipo="text" Nome="pessoa" onChange={EventHandleNomeProprietario}/>
                            </div>
                            <div>
                                <label htmlFor="Senha">Senha</label>
                                <Input Tipo="password" Nome="Senha" onChange={EventHandleSenha}/>
                            </div>

                            <br/>
                            
                            <div className="d-flex justify-content-between">
                                 <button type="button" class="btn btn-success" onClick={EventChangeCadastrarProprietario}>Cadastrar Proprietario</button>
                                 <button type="button" class="btn btn-danger" onClick={EventHandleChangeCancelarOperacao}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCadastroProprietario;