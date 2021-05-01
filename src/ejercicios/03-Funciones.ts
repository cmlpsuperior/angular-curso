
function sumar(a: number,b:number):number{
    return a+b;
}

const sumerFecha = (a:number,b:number):number => {
    return a+b;
}

function multiplicar(numero: number,otroNumero:number ,base:number):number{
    return numero*base;
}

interface PersonajeLOR {
    nombre:string;
    pv: number;
    habilidades?: string[];
    puebloNatal?: string;
}

function curar (personaje:PersonajeLOR, curarHp: number):void{
    personaje.pv += curarHp;
}


const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Henry',
    pv: 50,
}
console.log(nuevoPersonaje);
curar(nuevoPersonaje, 20)
//const resultado = multiplicar(10, 30,14);
console.log(nuevoPersonaje);