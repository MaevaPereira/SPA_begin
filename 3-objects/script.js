
//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

function afficherClesValeurs(obj, prefixe = '') {
    for (let cle in obj) {
        if (obj.hasOwnProperty(cle)) {
            let valeur = obj[cle];
            let chemin = prefixe ? `${prefixe}.${cle}` : cle;

            if (typeof valeur === 'object' && valeur !== null) {
                // Appel récursif pour les sous-objets
                afficherClesValeurs(valeur, chemin);
            } else {
                // Affichage de la valeur primitive
                console.log(`${chemin} : ${valeur}`);
            }
        }
    }
}
afficherClesValeurs(bus);

/*
//sans récursivité
Object.keys(bus).forEach((key) => {
    if(typeof bus[key] === "object") {
        Object.keys(bus[key]).forEach((subKey) => {
            console.log(subKey + ": " + bus[key][subKey]);
        })
    } else {
        console.log(key + ": " + bus[key]);
    }
})
*/

//3.2 Object.values

function afficherPerturbations(obj, prefixe = '') {
    for (let cle in obj) {
        if (obj.hasOwnProperty(cle)) {
            let valeur = obj[cle];
            let chemin = prefixe ? `${prefixe}.${cle}` : cle;

            if (typeof valeur === 'object' && valeur !== null) {
                // Appel récursif pour les sous-objets
                afficherPerturbations(valeur, chemin);
            } else if(cle === 'texte') {
                // Affichage de la valeur primitive
                console.log(`${chemin} : ${valeur}`);
            }
        }
    }
}
afficherPerturbations(data)