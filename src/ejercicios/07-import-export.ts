/*
    ===== Código de TypeScript =====
*/

import { Producto, calcularISV } from './06-desestructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        desc: 'Nokia',
        precio: 1000
    },
    {
        desc: 'IPAD',
        precio: 2000
    }
];

const [total, isv] = calcularISV(carritoCompras);

console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);

