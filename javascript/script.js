
function validanome(valor){
    let vetor = valor.split(" ");
    if (vetor.length >= 2 && vetor[0].length >=3){
        return true;
    }
    else{
        return false;
    }
}
 
function validasenha(valor){
    let tamanho = valor.length;
    if (tamanho < 6){
        return false;
    }
    let vetor = valor.split("");
 
    //testar numeros
    let valido = false;
    for(let i = 0; i < tamanho; i++){
        valido = valido || (! isNaN(vetor[i]));
    }
    if (valido == false){
        return false;
    }
 
    //testar letras maiusculas
    valido = false;
    for(let i = 0; i < tamanho; i++){
        valido = valido || (vetor[i] >= "A" && vetor[i] <= "Z");
    }
    if(valido == false){
        return false;
    }
 
    //carcter especial
    valido = false;
    for(let i = 0; i < tamanho; i++){
        valido = valido || ("!@#$%&?*{}[].,;".includes(vetor[i]));
    }
    if(valido == false){
        return false;
    }
    return true;
}