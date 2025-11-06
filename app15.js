const imagem = document.getElementById('foto');
let foto_troca = false;

function TrocaFoto() {
    if (foto_troca === false){
            imagem[i].src = `michaeljackson1.jpg`;
        foto_troca = true;
    }else {
            imagem[i].src = `michael.jpeg`;
            foto_troca= false
        }

}