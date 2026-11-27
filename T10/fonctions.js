function calculersomme(tableau) {
    let somme = 0
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}


function calculerMoyenne(tableau) {
    let somme = calculersomme(tableau)
    return somme / tableau.length;
}


function trouverMaximum(tableau) {
    let max = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}


let note = [15, 12, 18, 11]
let Moyenne = calculerMoyenne(note);
let notmax = trouverMaximum(note);


console.log("=== BILAN DE CLASSE ===");
console.log("Moyenne : " + Moyenne, "/20");
console.log("Meilleure note : " + notmax, "/20");