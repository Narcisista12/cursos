let arreglo = new Array("carro1", "carro2", "carro3");
let autos =["carro1", "carro2", "carro3"];
console.log(arreglo);
console.log(autos);
console.log(autos[0]);

for(let i=0;i<autos.length;i++){
    console.log(autos[i]);
}

autos[1]= "carro5";
autos.push("carro10");
console.log(Array.isArray(autos));
console.log(autos instanceof Array);