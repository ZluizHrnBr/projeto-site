

const Input = ({Tipo, Nome, onChange}) => {
    return(
        <div>
            <input className="form-control" type={Tipo} name={Nome}  onChange={onChange}/>
        </div>
    );
}

export default Input;