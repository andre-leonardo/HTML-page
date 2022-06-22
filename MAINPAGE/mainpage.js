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

window.addEventListener('load', bemVindo())

function bemVindo() {
    const params = (new URL(document.location)).searchParams;
    const nome = params.get('name');
    document.getElementById('nomeRegistrado').innerHTML = nome;
    if(nome==null){
        document.getElementById("nomeUser").style.visibility = "hidden";
    }
}


document.getElementById("botaoCalculo").addEventListener('click', decimalToBinario)

function decimalToBinario(){
    
    let calculo = document.getElementById("numero").value;
    let arredondar = calculo.toString().split('.')[0];
    let resposta = document.getElementById("resultadoBinario");
    parseInt(arredondar);
    let resultado = [];
do
    {
        if(arredondar % 2 == 0)
        {
            resultado.push(0);
        }
        else
        {
            resultado.push(1);
        }
        arredondar = arredondar / 2;
        arredondar = arredondar.toString().split('.')[0];
        parseInt(arredondar);
    }
    while(arredondar != 0 )

    resultado.reverse();
    document.getElementById('resultadoBinario').innerHTML = '';
    resposta.append(resultado)
    console.log(resultado);
}