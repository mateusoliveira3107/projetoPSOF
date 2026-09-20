const botaoEnviar = document.getElementById('botaoEnviar');
const inputs = [
    document.getElementById('nome'),
    document.getElementById('email'),
    document.getElementById('telefone'),
    document.getElementById('mensagem')
]

botaoEnviar.addEventListener("click", function() {
    for (let input of inputs) {
        input.value = ""
    }
})