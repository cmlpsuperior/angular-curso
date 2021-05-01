

let habilidades = ['bash','Counter','Healing'];

interface Personaje {
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje:Personaje = {
    nombre: 'Henry',
    hp: 100,
    habilidades: ['bash','Counter','Healing'],
}

personaje.puebloNatal = 'pueblo paleta';
personaje.habilidades.push('cuaerto');

console.table(personaje);