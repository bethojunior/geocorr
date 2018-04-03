class UserController{
    insertUser(name , email , pass , callback){
        
        $.ajax({
            url:LOCAL+"/controller/UserController.php?action=insertUser",
            method: "POST",
            data:{"name" : name , "email" : email , "pass" : pass},
            success:function(result){
                callback(result);
            },error: function(result){
                callback(result);
            }
        })
        
    }
}