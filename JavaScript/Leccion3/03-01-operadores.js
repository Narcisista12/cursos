/*
let a = 15;
let minimo = 0;
let maximo = 10;

if (a >= minimo & a<= maximo ){
    console.log("a se encuentra dentro del rango");
}else{
    console.log("a se encuentra fuera del rando")
}

let vacaciones = false;
let descanso = true;

if ( vacaciones==true || descanso == true){
    console.log("el padre puede asistir al partido del hijo")
}else{
    console.log("el padre no puede asistir al partido del hijo")
}

let numero = 1>=3 ? "si es verdadero": "por lo contrario eso es falso";
console.log(numero);

let p= 4;
let resultado = (p % 2 == 0) ? "el numero es par": "el numero no es par";
console.log(resultado)
*/
let minumero = "10";
console.log(isNaN(minumero))
let conversor = Number(minumero);
console.log(typeof conversor);
conversor = String(conversor);
console.log(typeof conversor);