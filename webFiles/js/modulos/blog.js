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
        

        for(let i in data){

            let textPost = data[i]['postBlog'];
            let post = textPost.substr(0, 500);
            let src = ""
            let image = data[i]['src'];

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

function openBlogComplet(id , data){
    let blogSelect = "";
    for(let i in data){
        if(data[i]['id'] == id){
            alert(data[i]['titleBlog']);
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
            let title = titleBlog.substr(0,13);
            let post = data[i]['postBlog'];

            txt += 
            "<div class='listDataPosts'>" + 
                "<span title='" + post + "' class='titlePostLastsBlog'>" + data[i]['titleBlog'] + "</span>"+
            "</div>";
        }

        document.getElementById("lastsNews").innerHTML = txt;

    }
}