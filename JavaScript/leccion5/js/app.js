console.log('Aplicacion Calculadora')
function sumar(){
    let forma = document.getElementById('forma');
    let operandoA =forma['operandoa'];
    let operandoB = forma['operandob'];
    let resultado = parseInt(operandoA.value) +parseInt (operandoB.value);
    if(isNaN(resultado)){
        resultado = 'la operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `resultado:  ${resultado}`;
    console.log(`resultado:  ${resultado}`);
}