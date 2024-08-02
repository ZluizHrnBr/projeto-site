
const ButtonCancelar = ({onClick}) => {
    return (
        <div>
            <button className="btn btn-danger justify-content-end" type="submit" onClick={onClick}>Cancelar</button>
        </div>
    );
}

export default ButtonCancelar;