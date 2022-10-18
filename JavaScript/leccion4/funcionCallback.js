/* function mifuncion1(){
    console.log("funcion1");
}
function mifuncion2 (){
    console.log("funcion2");
}

mifuncion1();
mifuncion2();

function imprimirmensaje(mensaje){
    console.log(mensaje);
}
function sumar(a,b, funcionCallback){
    let res = a + b; 
    funcionCallback(res);
}
sumar(7,9, imprimirmensaje);
 */
// llamadas asincronas con  uso  SeTTimeout

/* function mifuncionCallback(){
    console.log('saludo asincrono despues de 3 seg');

}
setTimeout(mifuncionCallback,3000); // despues de tres segundos
setTimeout(function funcion2(){console.log('saludo despues de 10 segundos')}, 10000);
setTimeout(() =>{console.log('funcion flecha despues de 6 segundos')},6000);
 */

let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

setInterval(reloj, 5000);