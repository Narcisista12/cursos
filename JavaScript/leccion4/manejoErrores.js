'use strict'
try{
    let x=0;
    throw 'mi Error 123 4';
}catch(error){
    console.log(error);
}   
finally{
    console.log("termina la revicion de errores");
}
console.log("continuamos");
