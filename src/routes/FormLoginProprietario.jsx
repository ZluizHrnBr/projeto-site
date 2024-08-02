import { useContext, useState } from "react";
import ButtonCancelar from "./Components/ButtonCancelar";
import ButtonEntrar from "./Components/ButtonEntrar";
import Input from "./Components/Input";
import {  useNavigate } from "react-router-dom";
import Instance from "./Components/Instance";
import { AppContext } from "./Components/ThemeContext";

const FormLoginProprietario = () =>{

    const {data, setData} = useContext(AppContext);

    const [Nome_Usuario,setNomeUsuario] = useState('');
    const [Senha, setSenha] = useState('');

    const Navigate = useNavigate();

    const onClickEntrar = () => { 
        Instance.get(`/EntrarProprietario/${Nome_Usuario}/${Senha}`)
        .then((response) => {
            setData(response.data);
        }).catch((error) => {
            alert("Usuário ou senha incorretos");
        });

        return Navigate("/TelaPerfil");
    }

    const onClickCancelar = () => {
        return Navigate("/");
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form>
                            <h2 className="text-center">Entrar em Proprietário</h2>
                             <div className="form-group">
                             <label for="Codigo">Nome_Usuario</label>
                                 <Input Tipo="text" Nome="Nome" onChange={e => setNomeUsuario(e.target.value)}/>
                            </div>
                            <div className="form-group">
                            <label for="Senha">Senha</label>
                                <Input  Tipo="password" Nome="Senha" onChange={e => setSenha(e.target.value)}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ButtonEntrar onClick={onClickEntrar}/>
                                <ButtonCancelar onClick={onClickCancelar}/>
                            </div>
                        </form>
                    </div>
             </div>
            </div>
        </div>
    );
}

export default FormLoginProprietario;