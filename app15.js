window.onload = function() {
  const mensagem = document.getElementById("boasVindas");
  mensagem.textContent = "Bem-vindo à página do Rei do Pop, HEHEEEEEE! 🕺";
  setTimeout(() => {
    mensagem.style.opacity = 1;
  }, 500);
};
