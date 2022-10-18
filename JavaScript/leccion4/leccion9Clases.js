/* class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Javier", "Tarazona");
console.log(persona1.nombre)
persona1.nombre= "Carolina";
console.log(persona1.nombre)
 
let persona2 = new Persona("karen", "Dayana");
console.log(persona2.nombre) */

class Persona {
  static contadorPersona = 0;
  static get Max_Objeto() {
    return 5;
  }
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersona < Persona.Max_Objeto) {
      this._idPersona = ++Persona.contadorPersona;
    }else{
        console.log("error maximo de personas creadas");
    }
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this.nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._idPersona + " " + this._nombre + " " + this._apellido;
  }
  toString() {
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludo desde metodo static");
  }
  static saludar2(persona) {
    console.log(persona.nombre);
  }
}
class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this.departamento;
  }
  set departamento(departamento) {
    this.departamento = departamento;
  }
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}
let persona1 = new Persona("Viviana", "Castellanos");
let empleado1 = new Empleado("Javier", "Tarazona", "ing Sistemas");

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(Persona.Max_Objeto);
let persona2 = new Persona("Viviana", "Castellanos");
let persona3 = new Persona("Viviana", "Castellanos");
let persona4 = new Persona("Viviana", "Castellanos");
let persona5 = new Persona("Viviana", "Castellanos");
console.log(persona5._apellido)