    function verificarresenhaeLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
  
let situacao
const nome = "pompompurin"

if ( senha == 1234 && login == nome ){
  situacao =" Acesso liberado!!"
 } else {
    situacao = "Acesso negado!!";
  }
  console.log("situacao")

 document.getElementById("login").value
 document.getElementById("senha");

document.getElementById("resultado").textContent=
 "Situacao:" + situacao

}