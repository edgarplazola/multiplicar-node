
const fs = require('fs'); //Required proyecto propio de node
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        console.log("==========================".green);
        console.log(`Tabla del ${base}`.green);
        console.log("==========================".green);

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        if (!data) {
            reject("Ingresa solamente números");
        }
        else {
            resolve(data);
        }

    });
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}