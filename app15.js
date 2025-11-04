
const titulo = document.getElementById("titulo");
const brilhos = [
  "0 0 15px #FFD700, 0 0 30px #FFA500, 0 0 45px #FF4500", 
  "0 0 15px #FF69B4, 0 0 30px #FF1493, 0 0 45px #FF00FF", 
  "0 0 15px #00FFFF, 0 0 30px #1E90FF, 0 0 45px #0000FF"
];
let i = 0;
function piscarBrilho() {
  titulo.style.textShadow = brilhos[i];
  i = (i + 1) % brilhos.length;
}
setInterval(piscarBrilho, 1000);
