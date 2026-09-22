const botaoEnviar = document.getElementById('botaoEnviar');
const inputs = [
    document.getElementById('nome'),
    document.getElementById('email'),
    document.getElementById('telefone'),
    document.getElementById('mensagem')
]

botaoEnviar.addEventListener("click", function() {
    let temCampoVazio = false;

    for (let input of inputs) {
        if(input.value === "") {
            temCampoVazio = false;
            break;
        } else {
            temCampoVazio = true;
            break;
        };
    };

    if (temCampoVazio === true) {
        for (let input of inputs) {
            input.value = ""
        };
        alert("Mensagem Enviada")
    } else {
        alert("Preencha todos os campos")
    }
});