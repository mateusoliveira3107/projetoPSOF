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

const botaoLinha1 = document.getElementById('botaoLinha01');
const botaoLinha2 = document.getElementById('botaoLinha02');
const botaoLinha3 = document.getElementById('botaoLinha03');
const botaoLinha4 = document.getElementById('botaoLinha04');
const botaoLinha5 = document.getElementById('botaoLinha05');
const botaoLinha6 = document.getElementById('botaoLinha06');

botaoLinha1.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 01 - Distrito Industrial`;
});
botaoLinha2.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 02 - Terminal Central Urbano`;
});
botaoLinha3.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 03 - Zaccaria`;
});
botaoLinha4.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 04 - Forvia`;
});
botaoLinha5.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 05 - Unipac`;
});
botaoLinha6.addEventListener("click", function() {
    areaDetalhesLinha.style.display = "block";
    areaTodasLinhas.style.display = "none";
    nomeLinha.textContent = `Linha 06 - Campo Novo`;
});