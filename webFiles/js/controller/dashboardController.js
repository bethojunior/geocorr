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

    sendDataMission(text , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutMissionController.php",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }

    sendDataValues(text , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutValuesController.php",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }

    sendDataVision(text , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutVisionController.php",
            method: "POST",
            data: {"text" : text},
            success: function(result){
                callback(result);
            }
        });
    }



}