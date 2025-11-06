const imagem = document.querySelector("img");
let foto_troca = false;

function TrocaFoto(){
    if (foto_troca === false){
        for (let i = 0; i <imagem.length; i++){
            imagem[i].src = `michaeljackson${i + 1}.jpg`;
        }
        foto_troca = true;
    } else {
        for (let i = 0; i < imagem.length; i++){
imagem[i].src = `michaeljackson0.jpg`;
        }
        foto_troca = false;
    }
    
}