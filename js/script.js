var btn_cripto = document.querySelector("#btn-cripto");
var campoEntrada = document.querySelector("#input-texto");
var campoSaida = document.querySelector("#msg");
var dadoCripitografado

campoEntrada.addEventListener("input", function () {
  texto_entrada = this.value;

  var troca01 = criptografar(texto_entrada, "a", "ai")
  var troca02 = criptografar(troca01, "e", "enter")
  var troca03 = criptografar(troca02, "i", "imes")
  var troca04 = criptografar(troca03, "o", "ober")
  dadoCripitografado = criptografar(troca04, "u", "ufat")
  console.log(dadoCripitografado)
  
});

btn_cripto.addEventListener("click", function(event){
  event.preventDefault();
  campoSaida.value = dadoCripitografado
  
});