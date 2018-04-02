class ServiceController {
    sendPost(title, post , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutService",
            method: "POST",
            data:{"title" : title , "post" : post},
            success: function(result){
                callback(result);
            },error: function(result){
                swal("ERROR" ,"Erro na conexão com o banco de dados" , "error");
            }
        });
    }
}