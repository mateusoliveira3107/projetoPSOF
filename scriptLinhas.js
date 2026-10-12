const botaoBuscarLinha = document.getElementById('botaoBuscarLinha');
const inputLinha = document.getElementById('inputConsultarLinha');

const areaDetalhesLinha = document.getElementById('areaLinhasRotas');

const nomeLinha = document.getElementById('nomeLinha');

botaoBuscarLinha.addEventListener("click", function() {
    if (inputLinha.value === "") {
        alert("Informe uma linha")
        return;
    };

    areaDetalhesLinha.style.display = "block";
    nomeLinha.textContent = `${inputLinha.value} - Distrito Industrial`
});