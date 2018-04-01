class ClienteController {

    insertClient(email , name , pass , callback){

        $.ajax({
            url: LOCAL+"/controller/ClienteController.php",
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
            url:LOCAL+"/controller/getAllClients.php",
            success:function(result){
                let data = JSON.parse(result);
                callback(data);
            }
        });
    }

    //DELETA CLIENTE PELO ID
    deleteClient(id , callback){
        $.ajax({
            url:LOCAL+"/controller/DeleteCliente.php",
            method: "POST",
            data: {"id" : id},
            success: function(result){
                callback(result);
            }
        })
    }

}