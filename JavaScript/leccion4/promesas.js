/* let mipromesa = new Promise((resolver, rejechazar) =>{
    let expresion = false;
    if (expresion)
        resolver('resolvio correocto');
    else
        rejechazar('se produjo un error');
}); */

/* mipromesa.then(valor => console.log(valor), error => console.log(error));

 */
/* mipromesa.then( valor  => console.log(valor)).catch(error=>console.log(error));
 */

// async indica que una funcion regresa una promesa

/* async function miFuncionPromesas(){
    return 'saludos con promesa y async';
}; */
//miFuncionPromesas().then(valor => console.log(valor))

//ejemplo de async con await

/* async function funcionasuncawait(){
    let mipromesA = new Promise( resolver => {
        resolver('promesa con await');
    }); 
    console.log(await mipromesA);    
}
 */
//funcionasuncawait();

//promesas, await , async y setTimeout

async function funcionConpromesaAsyncTimeout(){
    let mipromesa = new Promise(resolver => {
        console.log("inicio de la promesa");
        setTimeout(()=> resolver('promesa con await y timeout'),6000);
        console.log('fin de la promesa');
    });
    console.log(await mipromesa);
}
funcionConpromesaAsyncTimeout();
