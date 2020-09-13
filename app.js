const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


//node app crear - d "Pasear al perro"#
//node app listar 
//node app actualizar -d
//

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('===============Por Hacer==================='.green);
            console.log(tarea.descripcion);
            console.log('Estado ', tarea.completado);
            console.log('==========================================='.green);
        }
        console.log('listar');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualizar', actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log('borrar', borrar);
        break;
    default:
        console.log('comando no es reconocido');
}