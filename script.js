const inputTextArea = document.querySelector(".input-texto");
const outputTextArea = document.querySelector(".output-texto");

function encriptar(texto){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase()

    for(let i=0; i < llavesEncriptacion.length; i++){
        if(texto.includes(llavesEncriptacion[i][0])){
            texto = texto.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return texto
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTextArea.value);
    outputTextArea.value = textoEncriptado;
    inputTextArea.value = '';
    outputTextArea.style.backgroundImage = "none";
}


function desencriptar(texto){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i=0; i < llavesEncriptacion.length; i++){
        if(texto.includes(llavesEncriptacion[i][1])){
            texto = texto.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return texto
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTextArea.value);
    outputTextArea.value = textoDesencriptado;
    inputTextArea.value = '';
    outputTextArea.style.backgroundImage = "none";
}

function btnCopiar(){
    navigator.clipboard.writeText(outputTextArea.value);
}