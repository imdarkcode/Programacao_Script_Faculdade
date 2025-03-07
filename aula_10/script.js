window.onload = function() {

    document.getElementById("formQuestion").onsubmit = function(evento) {
        evento.preventDefault();

        if (document.getElementById("selectQuestion").value == "1") {
            document.getElementById("tableAnswers").innerHTML = '<tr style="font-size: 20px; height: 20px"> <b>Resposta 1:</b> O javascript é uma linguagem de programação de tipagem fraca, que pode ser utilizada para criar interações em páginas web deixando-as mais dinâmica. </tr>' + document.getElementById("tableAnswers").innerHTML;
        }

        else {
            document.getElementById("tableAnswers").innerHTML = '<tr style="font-size: 20px; height: 20px"> <b>Resposta 2:</b> Os eventos de javascript são "sinais" que cada elemento html pode emitir, por exemplo: Ao clicar em um input de texto o elemento emitirá o evento "onFocus". </tr>' + document.getElementById("tableAnswers").innerHTML;
        }
    }

    document.getElementById("btnLimpar").onclick = function() {
        document.getElementById("tableAnswers").innerHTML = "";
    }
}