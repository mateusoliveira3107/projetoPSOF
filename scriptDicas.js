const botaoVerMais = document.getElementById('botaoVerMais');
const areaDicasExtras = document.getElementById('dicasExtras');

botaoVerMais.addEventListener("click", function() {
    if (areaDicasExtras.style.display === "none") {
        areaDicasExtras.style.display = "grid";
        botaoVerMais.textContent = "Ver menos";
    } else {
        areaDicasExtras.style.display = "none";
        botaoVerMais.textContent = "Ver mais";
    };
});