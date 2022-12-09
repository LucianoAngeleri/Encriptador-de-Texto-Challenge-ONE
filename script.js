const inputTexto = document.querySelector(".inputTexto")
const mensaje = document.querySelector(".mensaje")
const botonCopiar= document.querySelector(".botonCopiar")
const textAyudaLinea2=document.querySelector(".textoAyudaDesencriptado")
const textAyudaLinea1=document.querySelector(".Desencriptado h2")

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

if (mensaje.value==""){
    botonCopiar.style.display="none";
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    botonCopiar.style.display="";
    textAyudaLinea1.style.display = "none";
    textAyudaLinea2.style.display = "none";
    inputTexto.value = "";
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
    mensaje.style.backgroundImage = "none";
    botonCopiar.style.display="";
    textAyudaLinea1.style.display = "none";
    textAyudaLinea2.style.display = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function btnCopiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado al portapapeles")
    botonCopiar.style.display="none";
    mensaje.style.backgroundImage = "";
    textAyudaLinea1.style.display = "";
    textAyudaLinea2.style.display = "";
}