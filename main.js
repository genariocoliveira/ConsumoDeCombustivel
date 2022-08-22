var distancia = parseFloat(document.querySelector('#km')).value
var consumo = parseFloat(document.querySelector('#litro')).value
var val = parseFloat(document.querySelector('#valor')).value

var litros = distancia / consumo
var gasto = litros * val

var litrosD = litros.toFixed(2)
var gastoD = gasto.toFixed(2)


function somar() {
    var distancia = parseFloat(document.querySelector('#km').value)
    var consumo = parseFloat(document.querySelector('#litro').value)
    var val = parseFloat(document.querySelector('#valor').value)

    var litros = distancia / consumo
    var gasto = litros * val

    var litrosD = litros.toFixed(2)
    var gastoD = gasto.toFixed(2)
    var resposta = document.querySelector('#res').innerHTML = `Para sua viagem, você tera que colocar ${litrosD} litros de combustível. Com o valor de R$ ${val}, você gastara R$ ${gastoD}.`
    
    setTimeout(() => {
      var resposta = document.querySelector('#res').innerHTML = ''
      var distancia = document.querySelector('#km').value =''
      var consumo = document.querySelector('#litro').value =''
      var val = document.querySelector('#valor').value = ''
    }, 5000);
  }
