function calculersomme(tableau){
    let samme= 0;
    for(let i=0; i<tableau.length;i++){
        samme += tableau[i];
    }
    return samme / tableau.length;
}

let note1=[12,14,16];
let note2=[10,18,11,13];

console.log("Moyenne Groupe A : " + calculersomme(note1));
console.log("Moyenne Groupe B : "+ calculersomme(note2));