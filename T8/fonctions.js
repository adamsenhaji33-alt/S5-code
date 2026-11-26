function calculerSurface(longueur , largeur) {
    return longueur * largeur ;
}

function estGand(surface){
    return surface >= 100;
}

let surfacePrice = calculerSurface(12,10);
let Grandeprice = estGand(surfacePrice);

console.log("Surface calculée : "+surfacePrice,"m²");
console.log("Grande pièce : " + Grandeprice)