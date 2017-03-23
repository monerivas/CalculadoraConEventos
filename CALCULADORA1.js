var arreglo = [];


function imprimirResultado(numero){

    var valorCajita = document.getElementById('salida');
    valorCajita.value += numero;
    var numerito=valorCajita.value;
    return numerito;
}

function suma(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('salida').value;
    var suma = 0;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        suma = parseInt(arreglo[0]) + parseInt(arreglo[1]);
        arreglo[0] = suma;
        console.log(suma);
        // arreglo=[];
    }
    document.getElementById('salida').value = '';
}

function resta(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('salida').value;
    var resta = 0;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        resta = parseInt(arreglo[0]) - parseInt(arreglo[1]);
        arreglo[0] = resta;
        console.log(resta);
        // arreglo=[];
    }
    document.getElementById('salida').value = '';
}

function producto(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('salida').value;
    var producto = 1;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        producto = parseInt(arreglo[0]) * parseInt(arreglo[1]);
        arreglo[0] = producto;
        console.log(producto);
        // arreglo=[];
    }
    document.getElementById('salida').value = '';
}
function division(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('salida').value;
    var division = 1;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        division = parseInt(arreglo[0]) / parseInt(arreglo[1]);
        arreglo[0] = division;
        console.log(division);
        // arreglo=[];
    }
    document.getElementById('salida').value = '';
}
function mostrarResultado(){
  var valorCajita = document.getElementById('salida').placeholder;
  valorCajita=arreglo[0].toString();
}
