var data = new Date();
var hora = data.getHours();
var txt = document.getElementById("msg");
var imagem = document.getElementById("foto");
var h3 = document.getElementById("copy");
txt.innerHTML = `Agora são ${hora} horas!!`;
if (hora > 6 && hora < 12) {
//DIA
    document.body.style.background = "#dbdfa5";
    imagem.src = "assets/img/dia.jpg";
} else if (hora >= 12 && hora < 19) {
//TARDE
    document.body.style.background = "#ad9a42";
    imagem.src = "assets/img/tarde.jpg";
} else if (hora >= 19 && hora < 23) {
//NOITE
    document.body.style.background = "#333";
    imagem.src = "assets/img/noite.jpg";
    h3.style.color = "white";
} else {
//MADRUGADA
    document.body.style.background = "";
    imagem.src = "";
} 