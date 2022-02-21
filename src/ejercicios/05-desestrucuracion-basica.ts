/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE OBJETOS
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Desestructuración
const autor = 'UwU';
const {volumen,segundo,cancion,detalles:{anio,autor:autorDetalle}} = reproductor;
//const {autor,anio} = detalles;

/*
console.log(`El volumen actual es de:`, volumen);
console.log(`El segundo actual es de:`, segundo);
console.log(`La canción actual es de:`, cancion);
console.log(`El autor actual es de:`, autor);
console.log(`El año actual es de:`, anio);
*/


//DESESTRUCTURACION DE ARREGLOS
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks', 'Piccolo', 'Gohan', 'Cell'];

//Si solo necesito una parte del arreglo se dejan espacios vacios seguidos de coma
const [,,p3,,] = dbz;

//console.log(dbz[0]);
//console.log(dbz[1]);
console.log(p3);
//console.log(dbz[3]);
//console.log(dbz[4]);
//console.log(dbz[5]);
