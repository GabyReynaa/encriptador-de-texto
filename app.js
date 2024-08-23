alert ("Bienvenido");
let nombredeUsuario = prompt ("Introduce tu nombre");
alert ("Hola  "+ nombredeUsuario + ", recuerda NO usar mayusculas, acentos o caracteres especiales en tu mensaje.");

const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";

function asignarTextoElemento(elementId, texto) {
  document.getElementById(elementId).textContent = texto;
}

function encriptarTexto (){
  let texto = document.getElementById("userText").value;
  let textoEncriptado = texto
 .replace(/e/g, e)
 .replace(/i/g, i)
 .replace(/a/g, a)
 .replace(/o/g, o)
 .replace(/u/g, u)
 

asignarTextoElemento ("resultadoTexto", textoEncriptado)

limpiarCaja();
}


function limpiarCaja() {
  document.querySelector("#userText").value= "";
}

function desencriptarTexto() {
   let textoEncriptado = document.getElementById("userText").value;

  let textoDesencriptado = textoEncriptado
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

  document.getElementById("resultadoTexto").textContent = textoDesencriptado;

  limpiarCaja();
  }

  