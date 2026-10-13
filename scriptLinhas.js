const botaoBuscarLinha = document.getElementById('botaoBuscarLinha');
const inputLinha = document.getElementById('inputConsultarLinha');

const areaDetalhesLinha = document.getElementById('areaLinhasRotas');

const botaoVerTodasLinhas = document.getElementById('botaoVerTodasLinhas');
const areaTodasLinhas = document.getElementById('areaTodasLinhas');

const nomeLinha = document.getElementById('nomeLinha');

botaoBuscarLinha.addEventListener("click", function() {
    if (inputLinha.value === "") {
        alert("Informe uma linha")
        return;
    };

    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none"
    nomeLinha.textContent = `${inputLinha.value} - Distrito Industrial`
});

botaoVerTodasLinhas.addEventListener("click", function() {
    areaTodasLinhas.style.display = "block";
    areaDetalhesLinha.style.display = "none"
});