function sendPostBlog(){

    var data = document.getElementById("formBlog");
    var formD = new FormData(data);
    

    new BlogController().sendDataBlog(formD , callback);
    function callback(result){
        let res = JSON.parse(result);
        let data = res['result'];

        if(data == true){
            swal("", "POSTADO COM SUCESSO", "success");
            document.getElementById("titlePost").value = "";
            document.getElementById("postBlog").value = "";
        }else {
            swal("Erro ao postar", "TENTE NOVAMENTE MAIS TARDE!", "error");
        }
    }

}

function loadDataBlog(){
    getLastsPosts();
    new BlogController().getAllPosts(callback);
    function callback(result){
        let data = JSON.parse(result);

        let txt = "";
        let path = "../../../files/posts/";
        

        for(let i in data){
            txt += 
            "<div class='listDataPosts'>" + 
                "<img class='col l4 imgPosts' src='" + path + data[i]['src'] + "'>" +
                "<div class='col l8'>"+
                    "<span class='titlePostBlog'>" + data[i]['titleBlog'] + "</span>"+
                    "<br>"+
                    "<p class='postBlog'>" + data[i]['postBlog'] + "</p>"+
                "</div>"+
            "</div><hr class='col l12 m12 s12 hrGreen'>";
        }

        document.getElementById("listNoticias").innerHTML = txt;

    }
}

function getLastsPosts(){
    new BlogController().getAllPosts(callback);
    function callback(result){
        let data = JSON.parse(result);

        let txt = "";

        for(let i in data){
            txt += 
            "<div class='listDataPosts'>" + 
                "<div class=''>"+
                    "<span class='titlePostLastsBlog'>" + data[i]['titleBlog'] + "</span>"+
                "</div>";
        }

        document.getElementById("lastsNews").innerHTML = txt;

    }
}