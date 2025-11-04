window.onload = function() {
  const tela = document.getElementById("boasVindas");

  setTimeout(() => {
    tela.classList.add("oculto");
    
    setTimeout(() => {
      tela.style.display = "none";
    }, 1000);
  }, 3000);
};
