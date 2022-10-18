function mifuncion(){
    console.log("saludos desde mi funcion");
}
mifuncion();
/* 
let mifuncionFlecha = () => {
    console.log("saludos desde mi funcion flecha");
} */
/* 
let mifuncionFlecha = () =>{console.log("mi funcion flecha en una sola linea")};
mifuncionFlecha() */
/* 
let saludar = saludo => {console.log(saludo)}
let saludando = "hola estoy saludando";
saludar(saludando); */

let funcionParametros = (a,b) => {return a + b};
console.log(funcionParametros(5,60));