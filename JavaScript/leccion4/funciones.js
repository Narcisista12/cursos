let x = 10;
function cambiarValor(a){
    a = 20;

}
cambiarValor(x);
console.log(x);

const persona ={
    nombre: "juan",
    apellido: "Tarazona"
} 

function cambiarValorObjeto(p1){
    p1.nombre = "Javier";
    p1.apellido = "Castellanos"
}
cambiarValorObjeto(persona);
console.log(persona)