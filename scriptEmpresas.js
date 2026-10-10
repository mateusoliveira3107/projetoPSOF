const botaoEmpresa1 = document.getElementById('botaoEmpresa1');
const botaoEmpresa2 = document.getElementById('botaoEmpresa2');
const botaoEmpresa3 = document.getElementById('botaoEmpresa3');

const nomeEmpresa = document.getElementById('nomeEmpresa');
const sobreEmpresa = document.getElementById('conteudoEmpresa');

botaoEmpresa1.addEventListener("click", function() {
    nomeEmpresa.innerHTML = "<h3>Zaccaria</h3>";

    sobreEmpresa.innerHTML = `<ul>
        <li><strong>Tipo de Transporte:</strong> Fretado exclusivo para funcionários.</li>
        <li><strong>Cobertura:</strong> Possui linhas que atendem diferentes bairros de Limeira.</li>
        <li><strong>Ponto de Referência:</strong> Próximo da Vila Queiroz (região central).</li>
    </ul>`
});

botaoEmpresa2.addEventListener("click", function() {
    nomeEmpresa.innerHTML = "<h3>Zaccaria</h3>";

    sobreEmpresa.innerHTML = `<ul>
        <li><strong>Tipo de Transporte:</strong> Fretado exclusivo para funcionários.</li>
        <li><strong>Cobertura:</strong> Rotas específicas ligando os bairros de Limeira até a empresa.</li>
        <li><strong>Ponto de Referência:</strong> Se localiza na Rodovia Limeira-Piracicaba.</li>
    </ul>`
});

botaoEmpresa3.addEventListener("click", function() {
    nomeEmpresa.innerHTML = "<h3>Zaccaria</h3>";

    sobreEmpresa.innerHTML = `<ul>
        <li><strong>Tipo de Transporte:</strong> Fretado exclusivo para funcionários.</li>
        <li><strong>Cobertura:</strong> Linhas que funcionam de acordo com os horários de trabalho da empresa.</li>
        <li><strong>Ponto de Referência:</strong> Se localiza no Distrito Industrial (Próximo da Rodovia Anhanguera)</li>
    </ul>`
});