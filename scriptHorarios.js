const areaHorarios = document.getElementById('areaHorariosNoPonto');
const pontoEscrito = document.getElementById('inputConsultaHorario');
const botaoBuscarHorarios = document.getElementById('botaoBuscarHorarios');
const nomePonto = document.getElementById('nomePonto');

botaoBuscarHorarios.addEventListener("click", function() {
    if (pontoEscrito.value === "") {
        alert("Insira um ponto de embarque");
        return;
    };

    areaHorarios.style.display = "block";
    nomePonto.textContent = `Ponto: ${pontoEscrito.value}`
})

const botaoVerTodos1 = document.getElementById('botaoVerTodos1');
const horariosExtras1 = document.getElementById('horariosExtras1');
const botaoVerTodos2 = document.getElementById('botaoVerTodos2');
const horariosExtras2 = document.getElementById('horariosExtras2');

botaoVerTodos1.addEventListener("click", function() {
    if (horariosExtras1.style.display === "grid") {
        horariosExtras1.style.display = "none"
        botaoVerTodos1.textContent = "Ver todos os horários ⬇";
    } else {
        horariosExtras1.style.display = "grid";
        botaoVerTodos1.textContent = "Ver menos";
    }
})
botaoVerTodos2.addEventListener("click", function() {
    if (horariosExtras2.style.display === "grid") {
        horariosExtras2.style.display = "none"
        botaoVerTodos2.textContent = "Ver todos os horários ⬇";
    } else {
        horariosExtras2.style.display = "grid";
        botaoVerTodos2.textContent = "Ver menos";
    }
})