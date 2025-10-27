
window.onload = function() {
  alert("Bem-vindo ao site de Michael Jackson — símbolo da Consciência Negra! ✊🏿");
};


const botao = document.getElementById("heheBtn");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "HEHEEEEEE! ✨🕺";
  mensagem.style.color = "#FFD700"; 
  mensagem.style.fontSize = "28px";
  mensagem.style.transition = "0.4s";
});
