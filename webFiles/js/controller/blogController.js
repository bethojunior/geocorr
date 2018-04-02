class BlogController{

    sendDataBlog(form , callback){

        $.ajax({
            url: LOCAL+"/controller/BlogController.php?action=insertPost",
            method:"POST",
            data: form,
            success: function(result){
                callback(result);
            },error: function(result){
                swal("Erro ao enviar post");
                console.log("ajax envia post" + result);
            },
            cache: false,
            contentType: false,
            processData: false,
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                    myXhr.upload.addEventListener('progress', function () {
                        // faz alguma coisa durante o progresso do upload 
                    }, false);
                }
            return myXhr;
            }
    
        });  

    }

}   