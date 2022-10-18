/* /* let x =10;
let persona= {
    nombre: "Javier",
    apellido: "Tarazona",
    edad: 22,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    },
    bañarse: function(){
        return "bañese puerco";
    }

}
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.bañarse());

let persona2 = new Object();
persona2.nomber = "Pepe";
persona2.telefono = 312451224;
console.log(persona2);
for (propiedades in persona2){
    console.log(propiedades);
    console.log(persona2[propiedades])
}
delete persona2.telefono;
console.log(persona2);
// Imprimir en javaScript
console.log(persona.nombre+" "+ persona.apellido+ " "+ persona.edad );
for(i in persona ){
    console.log(persona[i]);
}

let imprimirPersona =Object.values(persona);
console.log(imprimirPersona);
let imprimir2 = JSON.stringify(persona);
console.log(imprimir2); */
/* let persona= {
    nombre: "Javier",
    apellido: "Tarazona",
    edad: 22,
    idioma: "ES_Colombia",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set langg(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido
    },
    bañarse: function(){
        return "bañese puerco";
    }

}
console.log(persona.lang);
persona.langg = "latinoamerica";
console.log(persona.idioma)

function humano(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

}

let padre = new humano("juan","Tarazona", "eduaarasdf");
let madre = new humano("Monica","Pineda","Yoamoajavier@hotmail.com");

console.log(madre);
console.log(padre);
console.log(madre.nombreCompleto());

humano.prototype.tel ="NULL";
console.log(padre.tel)  */

let persona = {
    nombre: "juan",
    apellido: "Ramirez",
    tel: 2123124,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Dominguez",
    tel: 12313,

}
// uso de call para utilizar funcion nombre completo

console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto.call(persona2));
console.log(persona.nombreCompleto.apply(persona2));
