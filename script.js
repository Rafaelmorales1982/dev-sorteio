const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.querySelector(".resultado");
const randomizarBtn = document.querySelector(".randomizar-btn");


function sortear(){
    const minimo = Number(inputMin.value);
    const maximo = Number(inputMax.value);

    const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

   resultado.innerHTML = numeroSorteado;

}


randomizarBtn.addEventListener("click", sortear);


