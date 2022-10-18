class Persona{
    static contadorPersona = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    get idPersona(){
        this._idPersona;
    }
    set nombre(nomber){
        this._nombre = nomber;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return this._idPersona + " " + this._nombre + " " + this._apellido + " " + this._edad
    }
    toString() {
        return this.nombreCompleto();
      }
}

class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    nombreCompleto() {
        return this._idEmpleado +" "+ super.nombreCompleto() + ", " + this._sueldo;
      }
}

class Cliente extends Persona{
    static idCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.idCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get cliente(){
        return super.toString();
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    nombreCompleto() {
        return this._idCliente +" "+ super.nombreCompleto() + ", " + this._fechaRegistro;
      }
}

let persona1 = new Persona("Javier", "Tarazona",27);
console.log(persona1.toString());
let empleado1 = new Empleado("karen","Castellanos",20,1000);
console.log(empleado1.toString());
let cliente1 = new Cliente("Irma", "Suarez", 40, new Date());
console.log(cliente1.toString())
