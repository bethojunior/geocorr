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
        let path = "../../../files/posts/medium/";
        
        console.log(data);
        for(let i in data){

            let textPost = data[i]['postBlog'];
            let post = textPost.substr(0, 500);
            let src = ""
            let image = data[i]['src'];

            let date = data[i]['dataBlog'];
            let dataFormatada = date.substr(0 , 8);

            if(image == "" || image == null){
                image = "";
            }else {
                image = path + data[i]['src'];
            }

            txt += 
            "<div class='listDataPosts'>" + 
                "<div class='col l4'>"+
                    "<img class='imgPosts' src='" + image+ "'>" +
                "</div>"+
                "<div class='col l8'>"+
                    "<span class='titlePostBlog'>" + data[i]['titleBlog'] + "</span>"+
                    "<br>"+
                    "<label class='right'>PUBLICADO EM " + dataFormatada + " </label>"+
                    "<p class='postBlog'>" + post + "</p>"+
                "</div>"+
                "<label value='" + data[i]['id'] + "' class='right colorGreen readMore'>CONTINUAR LENDO</label>"+
            "</div><hr class='col l12 m12 s12 hrGreen'>";
        }

        document.getElementById("listNoticias").innerHTML = txt;

        for(let i in document.getElementsByClassName("listDataPosts")){
            document.getElementsByClassName("readMore")[i].onclick = function(){
                openBlogComplet(this.getAttribute("value") , data);
            };
        }

    }
}

function getLastsPosts(){
    new BlogController().getAllPosts(callback);
    function callback(result){
        let data = JSON.parse(result);

        let txt = "";

        for(let i in data){

            let titleBlog = data[i]['titleBlog'];
            let title = titleBlog.substr(0,20);
            let post = data[i]['postBlog'];

            txt += 
            "<div class='listDataPosts'>" + 
                "<span title='" + post + "' class='titlePostLastsBlog'>" + title + "</span>"+
            "</div>";
        }

        document.getElementById("lastsNews").innerHTML = txt;

    }
}

function openBlogComplet(id , data){
    document.getElementById("divBlogList").style.display = "none";
    document.getElementById("divPostComplet").style.display = "block";

    let list = "";
    let postSelect = "";

    for(let i in data){
        if(data[i]['id'] == id){
            postSelect = data[i];

            let date = postSelect['dataBlog'];
            let dataFormatada = date.substr(0 , 8);

            list += 
            "<div>"+
                "<hr class='col l12 m12 s12 hrGreen'>"+
                "<h4><b>" + postSelect['titleBlog'] + "</b></h4>"+
                "<label>" + dataFormatada + "</label>"+
                "<p class='col l8'>" + postSelect['postBlog'] + "</p>"+
            "</div>";
        }
        document.getElementById("postComplet").innerHTML = list;
    }


}

