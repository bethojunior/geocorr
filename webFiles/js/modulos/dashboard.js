function sendAbout(){
    let title = document.getElementById("titleAbout").value;
    let text = document.getElementById("textAbout").value;

    if(title == ""  || text == ""){
        swal("OPS.." , "Você precisa preencher todos os campos." , "error");
        return;
    }

    new DashboardController().sendData(title , text , callback);
    function callback(result){
        let data = JSON.parse(result);
        let res = data['result'];

        if(res){
            swal("" , "Postado com sucesso" , "success");
            document.getElementById("textAbout").value = "";
            document.getElementById("titleAbout").value = "";
        }else {
            swal("OPS.." , "Desculpe, houve um erro ao se conectar ao banco de dados" , "error");
        }
    }
    
}