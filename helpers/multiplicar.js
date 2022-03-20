const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{   

    // return new Promise((resolve,reject)=>{
    // console.log('============');
    // console.log('    Tabla del:', base);
    // console.log('============');
    
    // let salida = '';

    // for(let i=1; i<=10;i++){
    // salida +=(`${base} x ${i} = ${base*i}\n`);
    // }

    // console.log(salida);

    // fs.writeFileSync(`tabla-${base}.txt`, salida);

    // console.log(`tabla-${base}.txt creada`); 
        
    //     const filesaved = salida;
    //     (filesaved)
    //     ?resolve(filesaved)
    //     :reject(`El archivo no se guardo`)
    // })
    try{      
        let salida = '';
        let consola = '';
    
        for(let i=1; i<=hasta;i++){
        salida +=(`${base} ${'x'} ${i} = ${base*i}\n`);
        consola +=(`${base} ${'x'.green} ${i} = ${base*i}\n`);
        }

        if(listar){
            console.log('    Tabla del:', colors.blue(base));
            console.log('============'.green);
            console.log(consola);
            console.log(`tabla-${base}.txt creada`); 
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);      
            
        const filesaved = salida;
        return filesaved; 
    }
    catch(error){
        throw error
    }      
}

module.exports ={
    crearArchivo
}