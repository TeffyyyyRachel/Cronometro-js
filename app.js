var tempo = document.getElementById('tempo');
var tempo_passado;
var sec = 0;
var min = 0;

function comecar(){
    tempo_passado = setInterval(()=>{
            tempo.innerHTML = "00:" + sec;
            sec++;
    }, 1000)
}

function pausar(){
    tempo.innerHTML = tempo_passado
}