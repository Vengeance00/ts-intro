/*
    ===== Código de TypeScript =====
*/
//Decoradores
//Los decoradores son funciones que se ejecutan sobre una clase o una función
//Los decoradores son una forma de extender la funcionalidad de una clase o una función
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@classDecorator
class MiSuperClase{
    public miPropiedad:string = "ABC123";

    imprimir(){
        console.log("Hola mundo");
    }
}

console.log(new MiSuperClase().miPropiedad);