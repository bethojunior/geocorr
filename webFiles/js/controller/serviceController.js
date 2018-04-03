class ServiceController {

    getAll(callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=getAllServices",
            success: function(result){
                callback(result);
            }
        });
    }

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

    updatePost(id ,title , post , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=updateAboutService",
            method: "POST",
            data:{"id" : id , "title" : title , "post" : post},
            success: function(result){
                callback(result);
            },error: function(result){
                swal("ERROR" ,"Erro na conexão com o banco de dados" , "error");
            }
        });
    }
    
    deleteService(id , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=deletService",
            method: "POST",
            data:{"id" : id},
            success: function(result){
                callback(result);
            },error: function(result){
                swal("ERROR" ,"Erro na conexão com o banco de dados" , "error");
            }
        });
    }


}