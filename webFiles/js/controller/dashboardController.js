class DashboardController {

    sendData(title , text , callback){
        
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutUs",
            method: "POST",
            data: {"title" : title , "text" : text},
            success: function(result){
                callback(result);
            }
        });
    }

    sendDataMission(text , callback){

        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutMission",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }

    sendDataValues(text , callback){

        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutValues",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }

    sendDataVision(text , callback){

        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutVision",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }



}