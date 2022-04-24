
function criptografar(texto, chave, config) {
    var expressao = new RegExp(chave, "g");
    var dadoModificado = texto.replace(expressao, config);
    return dadoModificado;
  
  }
  /* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/