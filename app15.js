const botaoTrocar = document.getElementById("trocarBtn");
const imagem = document.getElementById("michaelImg");

// Nomes das imagens (coloque as fotos na mesma pasta)
let imagem1 = "michael.jpeg";
let imagem2 = "michael2.jpeg"; // segunda imagem
let mostrandoPrimeira = true;

botaoTrocar.addEventListener("click", () => {
  if (mostrandoPrimeira) {
    imagem.src = imagem2;
  } else {
    imagem.src = imagem1;
  }
  mostrandoPrimeira = !mostrandoPrimeira;
});
