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
            openClientes();
        }else {
            swal("OPS" , "Erro ao cadastrar cliente.." , "error");
        }
    }

}

//MONTA TABELA COM TODOS OS CLIENTES
function getAllClients(){
    document.getElementById("nameClient").value = "";
    document.getElementById("emailClient").value = "";
    document.getElementById("passClient").value = "";
    document.getElementById("passClient").value = "";

    new ClienteController().getAll(callback);

    function callback(data){
        var dados = data;
        let lista = "";

        for (let i in data){
            let id = data[i]['id'];
            let name = data[i]['nome'];
            let email = data[i]['email'];

            lista +=   
            "<tr class='listClient'>"+
                "<td id='idClient' class='hidden' value='" + id + "'> " + id  + "</td>"+
                "<td>" + name + "</td>"+
                "<td>" + email + "</td>"+
                "<td class='sendDataById' id='sendDataById' title='Abrir  cliente' value='" + id + "'><i class='material-icons small'>folder_open</i></td>"+
                "<td class='deleteClient' id='deleteClient' title='Apagar cliente' value='" + id + "'><i class='material-icons small'>clear_all</i></td>"+
            "</tr>";
                
        }
        document.getElementById("listClientes").innerHTML = lista;


        //PEGA CLIENTE POR ID
        for(let i in document.getElementsByClassName("sendDataById")){
            document.getElementsByClassName("sendDataById")[i].onclick = function(){
                sendDataById(this.getAttribute("value" ) , data);
            }

            document.getElementsByClassName("deleteClient")[i].onclick = function(){
                deleteClient(this.getAttribute("value") , data);
            }
        }


    }

}

//ABRE PÁGINA PARA ENVIAR ARQUIVOS PARA O CLIENTE
function sendDataById(id , dados){
    $('#modalSendFile').modal('open');

    for(let i in dados){
        let idSelect = "";
        if(dados[i]['id'] == id){
            idSelect = dados[i]['id'];
            let name = dados[i]['nome'];
            let email = dados[i]['email'];
            console.log(name);
            document.getElementById("idClientModal").value = id;
            document.getElementById("nameClientModal").innerHTML = email;
            document.getElementById("emailClientModal").innerHTML = name;
            document.getElementById("emailClientModal").href = 'mailto:' + name + '';
        }
        
    }

}

//ABRE MODAL FOR DELETE CLIENT
function deleteClient(id , data){
    new ClienteController().deleteClient(id , callback);
    function callback(result){
        let data = JSON.parse(result);
        let res = data['result'];
        if(res){
            openClientes();
            swal("" , "Apagado com sucesso!" , "success");
        }else {
            swal("OPS.." , "Erro ao apagar" , "error");
        }
    }
}

