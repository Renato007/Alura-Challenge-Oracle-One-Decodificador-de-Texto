var btn_cripto = document.querySelector("#btn-cripto");
var btn_desCripto = document.querySelector("#btn-descripto")
var campoEntrada = document.querySelector("#input-texto");
var campoSaida = document.querySelector("#msg");
var dadoCriptografado

campoEntrada.addEventListener("input", function () {
  texto_entrada = this.value;

  var troca01 = criptografar(texto_entrada, "a", "ai")
  var troca02 = criptografar(troca01, "e", "enter")
  var troca03 = criptografar(troca02, "i", "imes")
  var troca04 = criptografar(troca03, "o", "ober")
  dadoCriptografado = criptografar(troca04, "u", "ufat")
  console.log(dadoCriptografado)
});

btn_cripto.addEventListener("click", function(event){
  event.preventDefault();
  campoSaida.value = dadoCriptografado;  
});

btn_desCripto.addEventListener("click", function(event){
  event.preventDefault();
  campoSaida.value = descriptografar(dadoCriptografado);
})
