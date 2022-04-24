var btn_cripto = document.querySelector("btn-cripto");
var campoEntrada = document.querySelector("#input-texto");

campoEntrada.addEventListener("input", function () {
  texto_entrada = this.value;

  var troca01 = criptografar(texto_entrada, "a", "ai")
  var troca02 = criptografar(troca01, "e", "enter")
  var troca03 = criptografar(troca02, "i", "imes")
  var troca04 = criptografar(troca03, "o", "ober")
  var dadoCripitografado = criptografar(troca04, "u", "ufat")
  console.log(dadoCripitografado)
});