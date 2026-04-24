
//4.1 Découverte

const [a, b , c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);

//4.2 Application
//console.log(data);

/*
const info = Object.values(data);
for (let i = 0; i < info.length; i++) {
    const {dateDebut, dateFin, texte} = info[i];
    console.log("date debut: " +dateDebut + '\n' + "date fin: "+ dateFin + '\n'+ "texte: " + texte);
}
*/


//4.3

function add ( {type="default", heureDebut= "02:00:00", heureFin="03:00:00", latitude=0}) {
console.log(type);
}
function add2({type},...args) {
    console.log(type);
    console.dir(args);
}
add(data.SEM_9217)
add2(data.SEM_9217)

const info = Object.values(data);
for (let i = 0; i < info.length; i++) {
    const {dateDebut, dateFin, texte} = info[+i];
    console.log("date debut: " +dateDebut + '\n' + "date fin: "+ dateFin + '\n'+ "texte: " + texte);
}


//4.4