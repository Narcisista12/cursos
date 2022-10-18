class Producto {
  static contadorProducto = 0;
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProducto;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  get idProducto() {
    return this._idProducto;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set precio(precio) {
    this._precio = precio;
  }
  toString() {
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} `;
  }
}

let producto1 = new Producto("Jabon Rey",2500);
let producto2 = new Producto("Pantalon", 50000);
console.log(producto1.toString());
console.log(producto2.toString());

class Orden {
  static contadorOrden = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor(producto) {
    this._idOrden = ++Orden.contadorOrden;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      this._contadorProductosAgregados += 1;
    } else {
      console.log("limite de productos alcanzado");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let i of this._productos) {
      totalVenta += i.precio;
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productosOrden = "";
    for (let producto of this._productos) {
      productosOrden += producto.toString() + "\n ";
    }
    console.log( ` Orden: ${this._idOrden}\n Total: ${this.calcularTotal()} \n TotalProductos:  ${this._contadorProductosAgregados}\n Productos: \n ${productosOrden} `
    );
  }
}

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();