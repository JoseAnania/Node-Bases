// importaciones
const fs = require('fs');
const colors = require('colors');

// creo una función que crea el archivo txt
const createFile = (base = 5, listar, hasta = 10) => {
    
    try {
        
        return new Promise((resolve, reject) => {
        
            let result, consola = '';
        
            for (let index = 1; index <= hasta; index++) {
        
                result += `${base} x ${index} = ${base * index}\n`;
                consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
            };
            
            if (listar) {
                console.log('============'.green);
                console.log(`Tabla del: ${base}`.green);
                console.log('============'.green);
                console.log(consola);
            }
            
            // guardo en un txt
            fs.writeFileSync(`./salida/tabla${base}.txt`, result);
            
            resolve(`Tabla del ${base}`, result);
            });
    } catch (error) {
        
        throw error;
    }   
};

// permito la exportación de la clase
module.exports = {
    createFile,
};