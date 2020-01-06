function tab(){
    valeur = prompt("Ecrivez "+ taille + " valeur pour le tableau :")
    var tableau = [valeur];
    var split = valeur.split(" ")
    console.log(tableau)
}

function tailletab(){
    taille = prompt("Ecrivez la taille pour le tableau :")
    console.log("Taille du tableau : " + taille)

}

tailletab();
tab();