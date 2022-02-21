/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(public nombre:string, public direccion:string){

    }
}

class Heroe extends PersonaNormal{
    // Atributo privado: solo puede ser accedido desde la clase
    // Atributo publico: puede ser accedido desde cualquier parte
    // Atributo estatico: puede ser accedido desde cualquier parte sin crear una instancia de la clase
    /*
    alterEgo: string; 
    edad: number;
    nombreReal: string;

    constructor(nombreReal: string, alterEgo: string, edad: number){
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
    */

    
    constructor (public alterEgo: string, public edad?: number, public nombreReal?: string){
        super(nombreReal, 'New York');//Llamada al constructor de la clase padre
    }
}

const ironman = new Heroe('Ironman',35,'Tony Stark');

console.log(ironman);