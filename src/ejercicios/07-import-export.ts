/** 
 * 
 * 
 * 
 */

import { Producto, calculaISV } from './06-destructuracion';


const carritoCompras: Producto[]=[
    {desc:'tablet', precio:60},
    {desc:'celular', precio:100}
];

const [total, isv] = calculaISV(carritoCompras);

console.log('total: ', total);
console.log('isv: ', isv);



