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

function sendAboutMission(){
    let text = document.getElementById("textMission").value;

    if(text == ""){
        swal("OPS.." , "Você precisa preencher todos os campos." , "error");
        return;
    }

    new DashboardController().sendDataMission(text , callback);
    function callback(result){
        let data = JSON.parse(result);
        let res = data['result'];

        if(res){
            swal("" , "Postado com sucesso" , "success");
            document.getElementById("textMission").value = "";
        }else {
            swal("OPS.." , "Desculpe, houve um erro ao se conectar ao banco de dados" , "error");
        }
    }
}

function sendAboutValues(){

    let text = document.getElementById("textValues").value;

    if(text == ""){
        swal("OPS.." , "Você precisa preencher todos os campos." , "error");
        return;
    }

    new DashboardController().sendDataValues(text , callback);
    function callback(result){
        let data = JSON.parse(result);
        let res = data['result'];

        if(res){
            swal("" , "Postado com sucesso" , "success");
            document.getElementById("textValues").value = "";
        }else {
            swal("OPS.." , "Desculpe, houve um erro ao se conectar ao banco de dados" , "error");
        }
    }
}


function sendAboutVision(){
    let text = document.getElementById("textVision").value;

    if(text == ""){
        swal("OPS.." , "Você precisa preencher todos os campos." , "error");
        return;
    }

    new DashboardController().sendDataVision(text , callback);
    function callback(result){
        let data = JSON.parse(result);
        let res = data['result'];

        if(res){
            swal("" , "Postado com sucesso" , "success");
            document.getElementById("textVision").value = "";
        }else {
            swal("OPS.." , "Desculpe, houve um erro ao se conectar ao banco de dados" , "error");
        }
    }
}