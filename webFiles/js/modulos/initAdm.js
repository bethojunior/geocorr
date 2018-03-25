document.addEventListener("DOMContentLoaded", function(){

    setTimeout(initComponents, 450);
    
    function initComponents(){
        document.getElementById("dashboard").onclick = openDashboard;
        document.getElementById("blog").onclick = openBlog;
        document.getElementById("clientes").onclick = openClientes;
        document.getElementById("chat").onclick = openChat;
        document.getElementById("sendPostBlog").onclick = sendPostBlog;
    }

    function showNav(){
        document.getElementById("divNav").style.display = "block";
    }

});