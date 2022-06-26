document.getElementById("banana").addEventListener("mouseover", bananaParaPenguim)
document.getElementById("banana").addEventListener("mouseout", bananaParaPenguim)
let contBananas = 0;

function bananaParaPenguim(){
    if(contBananas % 2 == 0){
        document.getElementById("banana").src = "imagens/penguim.gif";
        contBananas++;
    }
    else {
        document.getElementById("banana").src = "imagens/banana.gif";
        contBananas++;
    }
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

document.getElementById("logoDoom").addEventListener('mouseover', mudarResolucaoDoom)
document.getElementById("logoDoom").addEventListener('mouseout', mudarResolucaoDoom)

document.getElementById("logoDiablo").addEventListener('mouseover', mudarResolucaoDiablo)
document.getElementById("logoDiablo").addEventListener('mouseout', mudarResolucaoDiablo)

document.getElementById("logoCastle").addEventListener('mouseover', mudarResolucaoCastle)
document.getElementById("logoCastle").addEventListener('mouseout', mudarResolucaoCastle)

let contDoom=0;
let contDiablo=0;
let contCastle=0;

function mudarResolucaoDoom(){
    if(contDoom % 2 == 0){
        document.getElementById("logoDoom").style.width = "300px";
        document.getElementById("logoDoom").style.height = "143px";
        contDoom++;
    }
    else{
        contDoom++;
        document.getElementById("logoDoom").style.width = "200px";
        document.getElementById("logoDoom").style.height = "95px";
    }
}

function mudarResolucaoDiablo(){
    if(contDiablo % 2 == 0){
        document.getElementById("logoDiablo").style.width = "320px";
        document.getElementById("logoDiablo").style.height = "180px";
        contDiablo++;
    }
    else{
        contDiablo++;
        document.getElementById("logoDiablo").style.width = "250px";
        document.getElementById("logoDiablo").style.height = "141px";
    }
}

function mudarResolucaoCastle(){
    if(contCastle % 2 == 0){
        document.getElementById("logoCastle").style.width = "320px";
        document.getElementById("logoCastle").style.height = "180px";
        contCastle++;
    }
    else{
        contCastle++;
        document.getElementById("logoCastle").style.width = "250px";
        document.getElementById("logoCastle").style.height = "141px";
    }
}


document.getElementById("botaoCalculo").addEventListener('click', decimalToBinario)
document.getElementById("botaoCalculoOct").addEventListener('click', decimalToOctal)

let regExp = /[a-zA-Z]/g;

function decimalToBinario(){
    
    let calculo = document.getElementById("numero").value;
    let arredondar = calculo.toString().split('.')[0];
    let resposta = document.getElementById("resultadoBinario");
    parseInt(arredondar);
    let resultado = [];
    let resultadoPrint = "";

    if(regExp.test(arredondar)){
        resultadoPrint = "Not a number"
        document.getElementById('resultadoBinario').innerHTML = '';
        resposta.append(resultadoPrint)
    }
    else{
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
}

function decimalToOctal(){
    
    let calculo = document.getElementById("numeroOct").value;
    let arredondar = calculo.toString().split('.')[0];
    let resposta = document.getElementById("resultadoOctal");
    parseInt(arredondar);
    let resultado = [];
    let resultadoPrint = "";
    if(regExp.test(arredondar)){
        resultadoPrint = "Not a number"
        document.getElementById('resultadoOctal').innerHTML = '';
        resposta.append(resultadoPrint)
    }
    else{
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
}

document.getElementById("botaoCalculoDec").addEventListener('click', binarioToDecimal)

function binarioToDecimal(){
    let resposta = document.getElementById("resultadoDecimal");
    let resultadoPrint = "";
    let calculo = document.getElementById("numeroDec").value;
    calculoArr = Array.from(String(calculo), Number);
    calculoArr.reverse();
    if(regExp.test(calculoArr)){
        resultadoPrint = "Not a number";
        document.getElementById('resultadoDecimal').innerHTML = '';
        resposta.append(resultadoPrint)
    }
    else if(calculoArr.includes(2) || calculoArr.includes(3) || calculoArr.includes(4) || calculoArr.includes(5) || calculoArr.includes(6) || calculoArr.includes(7) || calculoArr.includes(8) || calculoArr.includes(9)){
        resultadoPrint = "Not a binary number";
        document.getElementById('resultadoDecimal').innerHTML = '';
        resposta.append(resultadoPrint)
    }
    else{
        let soma = 0;
        let potencia = 0;
        for (let i = calculoArr.length-1; i >= 0; i--){
            if(calculoArr[i] == 1){
                potencia = Math.pow(2, i);
                soma=potencia+soma;
            }
        }
        somaArr = Array.from(String(soma), Number);
        somaArr.reverse();
        for(let i = somaArr.length-1; i >= 0; i--){
            resultadoPrint+=somaArr[i]
        }
        document.getElementById('resultadoDecimal').innerHTML = '';
        resposta.append(resultadoPrint)
        }
}