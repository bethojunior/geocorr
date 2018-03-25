function sendPostBlog(){
    
    let titleBlog = document.getElementById("titlePost").value;
    let postBlog = document.getElementById("postBlog").value;
    
    if(titleBlog != "" && postBlog != ""){
        new BlogController().sendDataBlog(titleBlog , postBlog , callback);
        function callback(result){
            let data = JSON.parse(result);
            let resultData = data['result'];

            if(resultData == true){
                swal("", "POSTADO COM SUCESSO", "success");
                document.getElementById("titlePost").value = "";
                document.getElementById("postBlog").value = "";
            }else {
                swal("Erro ao postar", "TENTE NOVAMENTE MAIS TARDE!", "error");
            }
        }
    }else {
        swal("ops!", "Preencha todos os campos !", "error");
    }
}