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