function sendService(){

    let title = document.getElementById("titleService").value;
    let post = document.getElementById("postService").value;

    if(title == '' || post == ''){
        swal("OPS.." , "Você precisa preencher todos os campos" , "error");
        return;
    }

    new ServiceController().sendPost(title , post , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            document.getElementById("titleService").value = "";
            document.getElementById("postService").value = "";
            swal("" , "Postado com sucesso!" , "success");
        }else {
            swal("" , "Desculpe, houve um erro ao postar.." , "error");
        }
    }

}

function loadServices(){

    function loadDataService(){
        
        new ServiceController().getAll(callback);

        function callback(result){
            let data = JSON.parse(result);
            let list = "";

            for(let i in data){
                let id = data[i]['id'];
                let title = data[i]['title'];
                let post = data[i]['post'];

                list += 
                "<div class='cardService col l12 m12 s12'>"+
                    "<h5 class='col l10'><b>" + title.toUpperCase() + "</h5></label>"+
                    "<button class='btn'><i value='" + id + "' id='deleteCard' class='deleteCard col l1 material-icons'>delete</i></button>"+

                    "<button class='btn'><i value='" + id + "' class='col l1 material-icons editCard'>create</i></button>"+
                    "<div class='divider'></div><h6 class='col l12'><b>" + post + "</b></h6>"+
                "</div>";

            }
            document.getElementById("listServiceFiles").innerHTML = list;

            for(let i in document.getElementsByClassName("editCard")){
                document.getElementsByClassName("editCard")[i].onclick = function(){
                    openModalEditCard(this.getAttribute("value") , data);
                }
            }

            for(let i in document.getElementsByClassName("deleteCard")){
                document.getElementsByClassName("deleteCard")[i].onclick = function(){
                    deleteCard(this.getAttribute("value"));
                }
            }
            
            
        }
    }

    setTimeout(function(){
        loadDataService();
        document.getElementById("preloadService").style.display = "none";
    },450);
}

function openModalEditCard(id , data){

    $('#modalCardService').modal('open');

    let cardSelect = "";

    for(let i in data){

       if(data[i]['id'] == id){
           cardSelect = data[i];
           document.getElementById("idCard").value = id;
           document.getElementById("titleCardService").value = cardSelect['title'];
           document.getElementById("postCardService").value = cardSelect['post'];
       }

    }



}

function updateCard(){
    let id = document.getElementById("idCard").value;
    let title = document.getElementById("titleCardService").value;
    let post = document.getElementById("postCardService").value;

    new ServiceController().updatePost(id , title , post , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            loadServices();
            swal("" , "Modificado com sucesso" , "success");
            $('#modalCardService').modal('close');
        }else {
            swal("ops.." , "Erro ao alterar card" , "error");
        }
    }
}

function deleteCard(id){
    new ServiceController().deleteService(id , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            loadServices();
            swal("" , "Apagado com sucesso" , "success");
            $('#modalCardService').modal('close');
        }else {
            swal("ops.." , "Erro ao alterar card" , "error");
        }
    }
}