/*
    ===== Código de TypeScript =====
*/
//Agregar tipos de dato a los parámetros de una función, ademas del tipo de dato que retorna
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => a + b;

//let resultado = sumar(1, 2);

const resultado = multiplicar(1, 2);

console.log(resultado);

//Para agregar parametros opcionales a una función se utiliza el signo de interrogación ? (Estos no pueden ir antes de los parámetros obligatorios)
//Despues de los obligatorios se pueden agregar opcionales
function multiplicar(numero: number, base:number,  otroNumero?: number): number {
    return numero * base;
}

//Void es el tipo de dato que retorna la función que no retorna nada
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    //Definir funciones dentro de una interfaz
    mostrarHP: () => void;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP(){
        console.log(`${this.nombre} tiene ${this.pv} puntos de vida`);
    }
}

curar(nuevoPersonaje, 10);

nuevoPersonaje.mostrarHP();