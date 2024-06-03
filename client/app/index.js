// Cria os campos
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

// Cria a tabela
var tbody = document.querySelector('table tbody');

// Quando o formulaário for enviado
document.querySelector('.form').addEventListener('submit', function(event) {
    
    // Cancela o envio do formulário
    event.preventDefault();

    // Cria uma nova linha na tabela
    var tr = document.createElement('tr');

    // Cria as ce?lulas da linha
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // Cria as ce?lulas da linha
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    // Adiciona a linha na tabela
    tbody.appendChild(tr);

    // Limpa o formulaário
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0.0;
    campos[0].focus();
});