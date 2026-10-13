const botaoBuscarLinha = document.getElementById('botaoBuscarLinha');
const inputLinha = document.getElementById('inputConsultarLinha');

const areaDetalhesLinha = document.getElementById('areaLinhasRotas');
const areaTodasLinhas = document.getElementById('areaTodasLinhas');

const botaoFecharResumoLinha = document.getElementById('botaoFecharResumoLinha');

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

botaoFecharResumoLinha.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "none";
    areaTodasLinhas.style.display = "block"
});