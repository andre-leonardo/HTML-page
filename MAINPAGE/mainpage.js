document.getElementById("banana").addEventListener("mouseover", bananaParaPatches)
document.getElementById("banana").addEventListener("mouseout", patchesParaBanana)

function bananaParaPatches(){
    document.getElementById("banana").src = "imagens/penguim.gif";
}
function patchesParaBanana(){
    document.getElementById("banana").src = "imagens/banana.gif";
}

document.getElementById("botaoBackground").addEventListener("click", mudarFundo)

let cont = 2;

function mudarFundo(){
    if (cont % 2 == 0){
    document.body.style.backgroundImage = "url('imagens/memedoge.webp')";
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
    const parametro = (new URL(document.location)).searchParams;
    const nome = parametro.get('name');
    document.getElementById('nomeRegistrado').innerHTML = nome;
    if(nome==null){
        document.getElementById("nomeUser").style.visibility = "hidden";
    }
}


document.getElementById("botaoCalculo").addEventListener('click', decimalToBinario)
document.getElementById("botaoCalculoOct").addEventListener('click', decimalToOctal)

function decimalToBinario(){
    
    let calculo = document.getElementById("numero").value;
    let arredondar = calculo.toString().split('.')[0];
    let resposta = document.getElementById("resultadoBinario");
    parseInt(arredondar);
    let resultado = [];
    let resultadoPrint = "";
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

    
    for(let i = resultado.length-1; i >= 0; i--){
        resultadoPrint+=resultado[i]
    }
    document.getElementById('resultadoBinario').innerHTML = '';
    resposta.append(resultadoPrint)
}

function decimalToOctal(){
    
    let calculo = document.getElementById("numeroOct").value;
    let arredondar = calculo.toString().split('.')[0];
    let resposta = document.getElementById("resultadoOctal");
    parseInt(arredondar);
    let resultado = [];
    let resultadoPrint = "";
do
    {
        if(arredondar % 8 == 0)
        {
            resultado.push(0);
        }
        else if(arredondar % 8 == 1)
        {
            resultado.push(1);
        }
        else if(arredondar % 8 == 2)
        {
            resultado.push(2);
        }
        else if(arredondar % 8 == 3)
        {
            resultado.push(3);
        }
        else if(arredondar % 8 == 4)
        {
            resultado.push(4);
        }
        else if(arredondar % 8 == 5)
        {
            resultado.push(5);
        }
        else if(arredondar % 8 == 6)
        {
            resultado.push(6);
        }
        else if(arredondar % 8 == 7)
        {
            resultado.push(7);
        }
        arredondar = arredondar / 8;
        arredondar = arredondar.toString().split('.')[0];
        parseInt(arredondar);
    }
    while(arredondar != 0 )

    
    for(let i = resultado.length-1; i >= 0; i--){
        resultadoPrint+=resultado[i]
    }
    document.getElementById('resultadoOctal').innerHTML = '';
    resposta.append(resultadoPrint)
}