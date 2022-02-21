/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {// T es el tipo de dato que se espera
    return argumento;
}

let soyString = queTipoSoy("Hola Mundo");// El tipo de dato que se espera es string
let soyNumber = queTipoSoy(12);// El tipo de dato que se espera es number
let soyArreglo = queTipoSoy([1, 2, 3]);// El tipo de dato que se espera es number[]
let soyExplicito = queTipoSoy<string>("Hola Mundo");// El tipo de dato que se espera es string