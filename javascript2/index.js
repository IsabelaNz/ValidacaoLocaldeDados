
let botao = document.getElementById("validar");
let formulario = document.getElementById("forms");
 
botao.addEventListener("click", validacao);

function validacao(){
    let ok = true;
    if(validanome(document.getElementById("idnome").value)){
        document.getElementById("erronome").innerHTML = "Nome Válido";
    }
    else{
        document.getElementById("erronome").innerHTML = "Nome Inválido";
        ok = false;
    }
 
    if(validasenha(document.getElementById("idsenha").value)){
        document.getElementById("errosenha").innerHTML = "Senha Válida";
    }
    else{
        document.getElementById("errosenha").innerHTML = "Senha Inválida";
        ok = false;
    }
 
    if(ok == true){
        formulario.submit();
    }
}