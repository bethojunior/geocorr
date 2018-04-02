document.addEventListener("DOMContentLoaded", function(){

    setTimeout(initComponents, 450);
    
    function initComponents(){
        document.getElementById("dashboard").onclick = openDashboard;
        document.getElementById("blog").onclick = openBlog;
        document.getElementById("clientes").onclick = openClientes;
        document.getElementById("chat").onclick = openChat;
        document.getElementById("cadastrarCliente").onclick = cadastrarCliente;
        document.getElementById("sendAbout").onclick = sendAbout;
        document.getElementById("sendAboutMission").onclick = sendAboutMission;
        document.getElementById("sendAboutValues").onclick = sendAboutValues;
        document.getElementById("sendAboutVision").onclick = sendAboutVision;
        document.getElementById("sendPostBlog").onclick = sendPostBlog;
        document.getElementById("sendService").onclick = sendService;
        document.getElementById("sendFormFile").onclick = sendFileById;
    }

    function showNav(){
        document.getElementById("divNav").style.display = "block";
    }

});