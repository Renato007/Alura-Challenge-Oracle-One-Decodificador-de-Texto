
function descriptografar(texto) {
    saida = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g,"i").replace(/ober/g, "o").replace(/ufat/g, "u");
    return saida;  
  }
/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/