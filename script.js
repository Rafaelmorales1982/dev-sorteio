const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.querySelector(".resultado");
const randomizarBtn = document.querySelector(".randomizar-btn");
const imagem = document.querySelector("#imagem");


/*Array de imagens */
const imagens = [
   "./img/titulo-sorteio.png",
   "./img/titulo-sorteio2.png",
   "./img/titulo-sorteio3.png",
];

/*Função para mudar imagem cada 3 segundos */
let contador = 0;
function mudarImagem(){
    
    imagem.src = imagens[contador];
    contador++;

     // volta para a primeira imagem quando chegar no final
    if(contador >= imagens.length){
        contador = 0;
    }
}setInterval(mudarImagem,2000);// muda a imagem a cada 2 segundos

//-----------------------------------------



function sortear() {
  const minimo = Number(inputMin.value);
  const maximo = Number(inputMax.value);

  if (minimo > maximo) {
    alert("O valor mínimo tem que ser MENOR que o valor MÁXIMO");

    // location.reload();

    inputMin.value = "";
    inputMax.value = "";
    resultado.textContent = "";
    inputMin.focus();
  } else {
    const numeroSorteado =
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    resultado.textContent = numeroSorteado;
  }
}

randomizarBtn.addEventListener("click", sortear);
