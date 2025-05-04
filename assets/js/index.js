let data = new Date();
let hora = data.getHours();
let txt = document.getElementById("msg");
let imagem = document.getElementById("foto");
let h3 = document.getElementById("copy");
txt.innerHTML = `Agora são ${hora} horas!!`;
if (hora >= 6 && hora < 12) {
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
} else if (hora >= 0 && hora < 6) {
//MADRUGADA
    document.body.style.background = "black";
    imagem.src = "assets/img/madrugada.jpg";
    h3.style.color = "white"
} 