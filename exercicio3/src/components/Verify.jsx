function Verify(props){
    let autenticado =  props.autenticado;
    if (autenticado =='true'){
        return(
            <div>
            <h1>Bem-vindo,{props.nome}</h1>
            </div>
        )
    }
}
export default Verify