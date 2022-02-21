/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//Interfaces
//Para agregar una propiedad a un objeto, se debe agregar la propiedad a la interface
//En caso de que la propiedad pueda o no estar se agrega un ? al final
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Goku',
    hp: 100,
    habilidades: ['Kamehameha', 'Ki', 'Ki Blast']
};

personaje.puebloNatal = "Veggita";

console.table(personaje);