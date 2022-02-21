/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Juan'
}

const pasajero2: Pasajero = {
    nombre: 'Pedro',
    hijos: ['Juan', 'Maria']
}

function imprimeHijos(pasajero: Pasajero){
    const cuantosHijos = pasajero.hijos?.length || 0; // ?. -> Si el objeto pasajero tiene hijos, entonces cuantosHijos será igual a la longitud del array de hijos, sino será 0
    console.log(cuantosHijos)
}

imprimeHijos(pasajero1);