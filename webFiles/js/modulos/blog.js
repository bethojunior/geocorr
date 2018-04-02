function sendPostBlog(){

    var data = document.getElementById("formBlog");
    var formD = new FormData(data);
    

    new BlogController().sendDataBlog(formD , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            swal("", "POSTADO COM SUCESSO", "success");
            document.getElementById("titlePost").value = "";
            document.getElementById("postBlog").value = "";
        }else {
            swal("Erro ao postar", "TENTE NOVAMENTE MAIS TARDE!", "error");
        }
    }

}