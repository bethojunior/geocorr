function addUser(){
    $('#modalAddUser').modal('open');
}

function cadUser(){
    let name = document.getElementById("nameUserCad").value;
    let email = document.getElementById("emailUserCad").value;
    let pass = document.getElementById("passUserCad").value;
    let passAgain = document.getElementById("passUserCadAgain").value;

    if(name == "" || email == "" || pass == "" || passAgain == ""){
        swal("" , "Preencha todos os campos" , "error");
        return;
    }
    if(pass != passAgain){
        swal("" , "As senhas não coincidem" , "error");
        return;
    }

    new UserController().insertUser(name , email , pass , callback);
    
    function callback(result){
        console.log(result);
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            swal("" , "Usuário adcionado com sucesso" , "success");
        }else {
            swal("OPS..." , "Erro ao adcionar usuário" , "error");
        }
    }
}