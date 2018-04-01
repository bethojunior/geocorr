class DashboardController {
    sendData(title , text , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php",
            method: "POST",
            data: {"title" : title , "text" : text},
            success: function(result){
                callback(result);
            }
        });
    }
}