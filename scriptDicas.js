const botaoVerMais = document.getElementById('botaoVerMais');
const areaDicasExtras = document.getElementById('dicasExtras');

botaoVerMais.addEventListener("click", function() {
    if (areaDicasExtras.style.display === "none") {
        areaDicasExtras.innerHTML = `
            <article>
                <h3>Dica 4</h3>
                <p>Fique com seu crachá de identificação funcional ou passe de transporte pronto para agilizar a conferência pelo motorista.</p>
            </article>
            <article>
                <h3>Dica 5</h3>
                <p>Caso note qualquer problema no veículo ou atraso fora do comum, utilize nosso canal de suporte rápido para relatar.</p>
            </article>
            <article>
                <h3>Dica 6</h3>
                <p>Respeite os assentos preferenciais, utilize fones de ouvido para mídias e mantenha o ônibus limpo para todos os colegas.</p>
            </article>
        `
        areaDicasExtras.style.display = "grid";
        botaoVerMais.textContent = "Ver menos";
    } else {
        areaDicasExtras.textContent = "";
        areaDicasExtras.style.display = "none";
        botaoVerMais.textContent = "Ver mais";
    }
})