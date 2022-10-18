class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this.tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set tipoEntrada(tipoEntrada) {
    this.tipoEntrada = tipoEntrada;
  }
  set marca(marca) {
    return (this._marca = marca);
  }
  toString() {
    return `\n tipoEntrada: ${this._tipoEntrada} \n marca: ${this._marca} \n `;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return ` \n idRaton: ${this._idRaton}  ${super.toString()}`;
  }
}
let raton1 = new Raton("USB", "HP"); 
let raton2 = new Raton("bluetoo", "ASUS");
console.log(raton2.toString());

class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado(){
    return this._idTeclado;
  }
  toString(){
    return `\n idTeclado: ${this._idTeclado}  ${super.toString()}`;
  }
}
let teclado1 = new Teclado("USB", "LENOVO");
console.log(teclado1.toString())


class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitor;
    }
    get marca(){
        return this._marca;
    }
    get tamaño(){
        return this._tamaño
    }
    get idMonitor(){
        return this._idMonitor;
    }
    set marca(marca){
        this._marca = marca;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return ` \n idMonitor: ${this._idMonitor} \n marca: ${this._marca} \n tamaño: ${this._tamaño} \n` ;
    }
}

let monitor1 = new Monitor("USB", 90);
console.log(monitor1.toString())

class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, raton, monitor, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return ` computadora: ${this._idComputadora} \n ${this._nombre} \n monitor: ${this._monitor} \n raton: ${this._raton} \n teclado: ${this._teclado} \n`;
    }
}

let pc1 = new Computadora("PClujos", raton1, monitor1, teclado1);
console.log(`${pc1}`)

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];

    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;
        }
        console.log(`Orden: ${this.idOrden} \n computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(pc1);
orden1.mostrarOrden();