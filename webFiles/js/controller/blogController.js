class BlogController{

    sendDataBlog(titleBlog,postBlog,callback){

        $.ajax({
            url:LOCAL+"/controller/BlogController.php",
            method:"POST",
            data:{"titleBlog" : titleBlog , "postBlog" : postBlog},
            success: function(result){
                callback(result);
            },error: function(result){
                swal("Erro ao enviar post");
                console.log("ajax envia post" + result);
            }
        });  

    }

}