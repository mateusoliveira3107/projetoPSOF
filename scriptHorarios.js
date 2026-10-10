const botaoVerTodos1 = document.getElementById('botaoVerTodos1');
const horariosExtras1 = document.getElementById('horariosExtras1');
const botaoVerTodos2 = document.getElementById('botaoVerTodos2');
const horariosExtras2 = document.getElementById('horariosExtras2');

botaoVerTodos1.addEventListener("click", function() {
    if (botaoVerTodos1.style.display === "none") {
        horariosExtras1.display = "grid"
        botaoVerTodos1.textContent = "Ver menos";
    } else {
        horariosExtras1.style.display = "none";
        botaoVerTodos1.textContent = "Ver todos";
    }
})
botaoVerTodos2.addEventListener("click", function() {
    if (botaoVerTodos2.textContent === "Ver todos") {
        horariosExtras2.display = "grid"
        botaoVerTodos2.textContent = "Ver menos";
    } else {
        horariosExtras2.style.display = "none";
        botaoVerTodos2.textContent = "Ver todos";
    }
})