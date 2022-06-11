var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
]
console.log(campos)

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault()
  var tr = document.createElement('tr')
  campos.forEach(function (campo) {
    //cria uma td sem informaçoes
    var td = document.createElement('td')

    //atribui o valor do campo á td
    td.textContent = campo.value

    //adicionar a td na tr
    tr.appendChild(td)
  })
  //nova td que armazenará o volume da negociação
  var tdVolume = document.createElement('td')

  tdVolume.textContent = campos[1].value * campos[2].value
  tr.appendChild(tdVolume)
  tbody.appendChild(tr)

  //Limpa o campo da data
  campos[0].value = ''
  //Limpa o campo de quantidade
  campos[1].value = 1
  //Limpa o campo do valor
  campos[2].value = 0
  //Foca no campo de data
  campos[0].focus()
})
