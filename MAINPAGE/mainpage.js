let audio = new Audio();
    audio.src = "musica/trance.mp3";
    
    function play() {
    audio.play();
    }

document.getElementById("banana").addEventListener("mouseover", bananaParaPatches)
document.getElementById("banana").addEventListener("mouseout", patchesParaBanana)

function bananaParaPatches(){
    document.getElementById("banana").src = "imagens/patches.jpg";
}
function patchesParaBanana(){
    document.getElementById("banana").src = "imagens/banana.gif";
}

document.getElementById("botaoBackground").addEventListener("click", mudarFundo)

let cont = 2;

function mudarFundo(){
    if (cont % 2 == 0){
    document.body.style.backgroundImage = "url('imagens/udy.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("osrs_text").style.fontSize = "25px"
    cont++
    }
    else{
        document.body.style.backgroundImage = "none";
        cont++;
    }
}

