/** 
 * 
 * 
 * 
 */

export interface Producto {
    desc: string;
    precio: number;

}

export function calculaISV(productos:Producto[]):[number,number]{

    let total = 0;
    productos.forEach((prod)=> {
        total+=prod.precio;
    })

    return [total, total*15.0/100];
}

