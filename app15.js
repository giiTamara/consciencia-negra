const btn = document.getElementById("trocarBtn");
const img2 = document.getElementById("img2");

let imagens = ["michael.jpeg", "michael2.jpeg"];
let index = 0;

btn.addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  img2.src = imagens[index];
});

