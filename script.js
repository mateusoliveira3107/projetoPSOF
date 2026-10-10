/* Contato */
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
        if (input.value === "") {
            temCampoVazio = true;
            break;
        }
    }

    if (temCampoVazio === false) {
        for (let input of inputs) {
            input.value = ""
        };
        alert("Mensagem Enviada");
    } else {
        alert("Preencha todos os campos");
    };
});

/* Dicas */
const botaoVerMais = document.getElementById('botaoVerMais'); 
const dicasExtras = document.getElementById('dicasExtras'); 

botaoVerMais.addEventListener("click", function() { 
    if (dicasExtras.style.display === "grid") { 
        dicasExtras.style.display = "none"; 
        botaoVerMais.textContent = "Ver mais";
    } else { 
        dicasExtras.style.display = "grid"; 
        botaoVerMais.textContent = "Ver menos";
    }
});