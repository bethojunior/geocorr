function openDashboard(){
    document.getElementById("divDashboard").style.display = "block";
    document.getElementById("divBlog").style.display = "none";
    document.getElementById("divClientes").style.display = "none";
    document.getElementById("divChat").style.display = "none"; 
}

function openBlog(){
    document.getElementById("divBlog").style.display = "block";
    document.getElementById("divDashboard").style.display = "none";
    document.getElementById("divClientes").style.display = "none"; 
    document.getElementById("divChat").style.display = "none";                        
}

function openClientes(){
    document.getElementById("divClientes").style.display = "block";
    document.getElementById("divDashboard").style.display = "none";
    document.getElementById("divBlog").style.display = "none";
    document.getElementById("divChat").style.display = "none";
}

function openChat(){
    document.getElementById("divChat").style.display = "block";
    document.getElementById("divClientes").style.display = "none";
    document.getElementById("divDashboard").style.display = "none";
    document.getElementById("divBlog").style.display = "none";
    
}
