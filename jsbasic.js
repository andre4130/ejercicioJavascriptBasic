// ejercio 1
  console.log("Hola Mundo");

// ejercicio 2
  alert("¡Me llamo André!")

// ejercicio 3
  var nombre = "André";
  var apellido = "Maia";
  console.log(nombre+" "+apellido);

// ejercicio 4

function suma (num1,num2) {
  var num1 = 34;
  var num2 = 56;
  var resultado = num1+num2;
  console.log ("La suma entre "+num1+" y "+num2+" es "+resultado);
}

// ejercicio 5

  var notaExamen = prompt ("cual es la nota del examen?")
  notaExamen = parseFloat(notaExamen)
  if (notaExamen < 5) {

  alert("Ohh has suspendido el examen con "+notaExamen);
}
  else {
    alert("Muy bien, has aprobado el examen con " +notaExamen);
  }

// ejercicio 6
//
var colorCoche = ("tengo un coche de color verde");
console.log(colorCoche);
var azul = colorCoche.replace ("verde", "azul");
console.log(azul);
let regEx = /o/g;
let newAzul = azul.replace(regEx,"u");
console.log(newAzul);

// ejercicio 7

var objects=["taula", "cadira", "ordinador", "libreta"];
var mensaje="";
for (var i = 0; i < objects.length; i++) {
  mensaje = "el objecto "+ objects[i] +" está en la posición "+ objects.indexOf(objects[i]);
  console.log(mensaje);
}

// ejercicio 8

var mensajeOperador = "Introduce el operador de la operación(+,-,*,/)";
var mensajeValor1 ="Introduce el valor 1 de la operación";
var mensajeValor2 ="Introduce el valor 2 de la operación";
var resultado;
var operador = prompt (mensajeOperador);
var valor1 = prompt (mensajeValor1);
var valor2 = prompt (mensajeValor2);
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

function calculadora (operador, valor1, valor2){

if (operador == "+") {
  resultado=valor1+valor2;
  return resultado;
}
if (operador == "-"){
  resultado = valor1-valor2;
  return resultado;
}
if (operador == "*"){
  resultado = valor1*valor2;
  return resultado;
}
if (operador == "/"){
  resultado = valor1/valor2;
  return resultado;
}
if (operador !== "+" || operador !== "-" || operador !== "/" || operador !== "*"){
resultado ="este operador no es valido"
return resultado;
}
};

console.log(operador);
console.log(valor1);
console.log(valor2);
var resultado=calculadora(operador, valor1, valor2);
console.log(resultado);
alert("el resultado de la operación es: "+ resultado);
