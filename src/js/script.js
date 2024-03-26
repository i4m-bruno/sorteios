setInterval(atualizarRelogio, 1000);
var sorteado = false;
document.getElementById('sortear').addEventListener('click', function() {
    var max = parseInt(document.getElementById('max').value);
    var resultado = document.getElementById('resultado');
    var erros = document.getElementById('erros');

    if (!sorteado) {
        if (isNaN(max)) {
            erros.innerText = 'Por favor, insira um número válido.';
            erros.classList.toggle('displayNone');
            setTimeout(function() {
                erros.innerText = null
                erros.classList.toggle('displayNone');
            }, 3000);
        }
        else {
            document.getElementById('sortear').classList.add('sorteado');
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                sortear(max, resultado);
            }, 5000);
        }
    }
    else {
        erros.innerText = 'Sorteio já efetuado. Recarregue a página'
        erros.classList.toggle('displayNone');
        setTimeout(function() {
            erros.innerText = null
            erros.classList.toggle('displayNone');
        }, 3000);
    }

});

function sortear(max, resultado)
{
    var numeroSorteado = Math.floor(Math.random() * (max + 1));
    resultado.innerText = 'Número sorteado: ' + numeroSorteado;
    resultado.classList.remove('displayNone');
    document.getElementById('loading').style.display = 'none';
    sorteado = true;
}

function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var tempo = horas + ':' + minutos + ':' + segundos;
    document.getElementById('relogio').innerText = tempo;

    var dia = agora.getDate();
    var mes = agora.getMonth() + 1;
    var ano = agora.getFullYear();

    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    var dataAtual = dia + '/' + mes + '/' + ano;
    document.getElementById('data').innerText = dataAtual;
}
