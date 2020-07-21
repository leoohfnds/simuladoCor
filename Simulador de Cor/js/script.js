var rangeColorRed = document.querySelector('#rangeColorRed');
var inputValueRed = document.querySelector('#inputValueRed');
var rangeColorGreen = document.querySelector('#rangeColorGreen');
var inputValueGreen = document.querySelector('#inputValueGreen');
var rangecurrentaColorBlue = document.querySelector('#rangeColorBlue');
var inputValueBlue = document.querySelector('#inputValueBlue');
var divCurrentColor = document.querySelector('.divCurrentColor');

function start() {
  console.log('DOM Carregado Com sucesso!');
  rangeColorRed.addEventListener('input', handleRangeValueChange);
  rangeColorGreen.addEventListener('input', handleRangeValueChange);
  rangeColorBlue.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  var idRage = event.target.id;
  if (idRage === 'rangeColorRed') {
    var currentColorRed = event.target.value;
    inputValueRed.value = currentColorRed;
  }
  var r = inputValueRed.value;

  if (idRage === 'rangeColorGreen') {
    var currentColorGreen = event.target.value;
    inputValueGreen.value = currentColorGreen;
  }
  var g = inputValueGreen.value;

  if (idRage === 'rangeColorBlue') {
    var currentColorBlue = event.target.value;
    inputValueBlue.value = currentColorBlue;
  }
  var b = inputValueBlue.value;

  divCurrentColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
start();
