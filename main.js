var distancia = parseFloat(document.querySelector('#km').value)
var consumo = parseFloat(document.querySelector('#litro').value)
var val = parseFloat(document.querySelector('#valor').value)

var litros = distancia / consumo
var gasto = litros * val

var litrosD = litros.toFixed(2)
var gastoD = gasto.toFixed(2)

function limpar(){
    // var r = document.querySelector('#res')
    // r.remove()
    sessionStorage.clear();
}
  // function mascara(){
  //   var distancia = document.querySelector('#km')
  //   var d = distancia.value
  //   if(d.length === 3 ){
  //     d = d + "km"
  //     distancia.value = d
  //     return true
  //   }
  // }
//}

function somar() {
    var distancia = parseFloat(document.querySelector('#km').value)
    var consumo = parseFloat(document.querySelector('#litro').value)
    var val = parseFloat(document.querySelector('#valor').value)

    var litros = distancia / consumo
    var gasto = litros * val

    var litrosD = litros.toFixed(2)
    var gastoD = gasto.toFixed(2)
    var resposta = document.querySelector('#res').innerHTML = `Para sua viagem, você tera que colocar ${litrosD} litros de combustível. Com o valor de R$ ${val}, você gastara R$ ${gastoD}.`
}