//1.1 Types simples

const name = 'Jacques';
let age = 80;
let useless = 'something';

console.log(name, age, useless);

age += 1;
useless = 14;

console.log(name, age, useless);

/*
LET :
le code s'exécute toujours sans erreurs, car VAR est visible dans toute la fonction où elle est déclarée et
LET est visible uniquement dans le bloc où elle est déclarée, on utilisera plus today let que var car il est moins permissif et evite les bugs

CONST :
variable ne peut pas être réassignée avec CONST donc il y a des erreurs dans la suite du code
 */

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'cauliflower', 'tomato'];

console.log(fruits, vegetables);

fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);

//absence d'erreur car il n'y a pas de réassignation de variables mais juste un ajout de la variable "banana"

//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);

savedGame = {};
// erreur car savedGame est modifié
settings.music = true;
settings.resolution = [3840, 2160];

console.log(settings, savedGame);
