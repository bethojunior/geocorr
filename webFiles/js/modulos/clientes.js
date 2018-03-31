function cadastrarCliente(){
    let name = document.getElementById("nameClient").value;
    let email = document.getElementById("emailClient").value;
    let pass = document.getElementById("passClient").value;
    let passAgain = document.getElementById("passClientAgain").value;

    if(name == '' && email == '' && pass == '' && passAgain == ''){
        swal("" , "Preencha todos os campos." , "error");
        return;
    } 
    if(pass != passAgain){
        swal("OPS!" , "As senhas não coincidem" , "error");
        return;
    }

    new ClienteController().insertClient(name , email , pass , callback);

    function callback(data){
        let result = data['result'];
        if(result == true){
            swal("" , "Cliente cadastrado com sucesso!" , "success");
        }else {
            swal("OPS" , "Erro ao cadastrar cliente.." , "error");
        }
    }
}