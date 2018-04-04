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

function sendCarousel(){

    let check = document.getElementById("carouselInput").value;
    if(check == ""){
        swal("OPS..." , "Não pode enviar formulário vazio" , "error");
        return;
    }
         
    let form = document.getElementById("formCarousel");
    let dataForm = new FormData(form);

    new DashboardController().sendCarousel(dataForm , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];
        document.getElementById("carouselInput").value = "";
        if(data == true){
            swal("" , "Enviado com sucesso" , "success");
        }else {
            swal("OPS.." , "Erro ao enviar" , "error");
        }
    }
}

function getAllCarousel(){
    new DashboardController().getAllCarousel(callback);
    function callback(result){
        let data = JSON.parse(result);
        let src = "";
        let list = "";
        let caminho = "";

        for(let i in data){
            list += 
            "<div class='col l4 m4 s12 divImagesCarousel'>"+
                "<div class='divImg'>"+
                    "<input class='idImg' value='" + data[i]['id'] + "'>"+
                    "<img src='../../../files/carousel/" + data[i]['src'] + "'>"+
                "</div>"+
            "</div>";
    
        }

        // for(let i in document.getElementsByClassName("idImg")){
        //     document.getElementsByClassName("idImg")[i].onclick = function(){
        //         console.log(this.getAttribute("value"));
        //     }
        // }

        document.getElementById("listImageCarousel").innerHTML = list;
    }
}