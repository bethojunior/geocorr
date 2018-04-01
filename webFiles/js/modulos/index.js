function readMoreBtn2(){
    swal("AQUI ABRIRIA UMA PÁGINA COM A INFORMAÇÃO COMPLETA ;D");
}

function openChat(){
    document.getElementById("chat").style.display = "none";
}

function alertaTest(){
    swal("AMAZING", "NOS CONTRATE E TENHA UM SITE COMPLETO", "success");
}
function alerta2Test(){
    swal("HI" , "NÃO NOS PERCA" , "success");
}
function search(){
    $('#modalSearch').modal('open');
}
function modalSendMail(){
    $('#modalEmail').modal('open');
}
function sendMail(){
    let name = document.getElementById("nameMail").value;
    let toMail = document.getElementById("toMail").values;
    let aboutMail = document.getElementById("aboutMail").value;
    let text = document.getElementById("textMail").value;
    if(name !== "" && toMail !== "" && aboutMail !== "" && text !== ""){
        swal("GOOD JOB", "Email enviado com sucesso ", "success");
    }else {
        swal("OPS", "PREENCHA TODOS OS DADOS CORRETAMENTE", "error");
    }
    
}


function showText(){
    document.getElementById("titleCard").style.display = "none";
    document.getElementById("hrHidden").style.display = "none";
    document.getElementById("textCard").style.display = "block";
    document.getElementById("textCard").style.color = "black";
    document.getElementById("card1").style.boxShadow = "10px 20px 30px lightblue";
}
function hiddenText(){
    document.getElementById("textCard").style.display = "none";
    document.getElementById("titleCard").style.display = "block";
    document.getElementById("hrHidden").style.display = "block";
}

function showText3(){
    document.getElementById("titleCard3").style.display = "none";
    document.getElementById("hrHidden3").style.display = "none";
    document.getElementById("titleCard3").style.color = "none";
    document.getElementById("textCard3").style.display = "block";
    document.getElementById("textCard3").style.color = "black";
    document.getElementById("card3").style.boxShadow = "10px 20px 30px lightblue";
}
function hiddenText3(){
    document.getElementById("hrHidden3").style.display = "block";
    document.getElementById("titleCard3").style.display = "block";
    document.getElementById("textCard3").style.display = "none";
}


