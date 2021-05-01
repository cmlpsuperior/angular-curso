/** 
 * 
 * 
 * 
 */

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
    public alterEgo: string;
    public edad: number;
    public nombreReal: string;

    constructor (alterEgo:string, edad:number, nombreReal:string){
        super(nombreReal,'new york'); //constructor de la clase padre

        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;

        
    };

    imprimirNombre():string{
        return this.alterEgo + ' ' + this.nombreReal ;
    };
};


const iroman = new Heroe('ironman',45,'Tony');

console.log(iroman);
