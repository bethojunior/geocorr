class ClienteController {

    insertClient(email , name , pass , callback){

        $.ajax({
            url: LOCAL+"/controller/ClienteController.php?action=insertClient",
            method: "POST",
            data:{"email" : email , "name" : name , "pass" : pass},
            success: function(result){
                let data = JSON.parse(result);
                callback(data);
            },error: function(data){
                callback(data);
            }
        });

    }

    //GET ALL CLIENTS
    getAll(callback){

        $.ajax({
            url: LOCAL+"/controller/ClienteController.php?action=getAll",
            success:function(result){
                let data = JSON.parse(result);
                callback(data);
            }
        });
    }

    //insere arquivo 

    sendFile(form , callback){
        $.ajax({
            url: LOCAL+"/controller/ClienteController.php?action=sendFile",
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

    //DELETA CLIENTE PELO ID
    deleteClient(id , callback){
        $.ajax({
            url:LOCAL+"/controller/ClienteController.php?action=deletClient",
            method: "POST",
            data: {"id" : id},
            success: function(result){
                callback(result);
            }
        })
    }

}