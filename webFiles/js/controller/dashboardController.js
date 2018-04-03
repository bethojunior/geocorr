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

    sendCarousel(form , callback){
        $.ajax({
            url:LOCAL+"/controller/AboutController.php?action=insertAboutCarousel",
            method: "POST",
            data:form,
            success:function(result){
                callback(result);
            },error:function(result){
                swal("Erro ao conectar com banco de dados");
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