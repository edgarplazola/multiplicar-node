const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 15
        }
    }).help().argv;


module.exports = {
    argv
}