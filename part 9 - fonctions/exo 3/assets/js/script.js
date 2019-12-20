var sw = prompt("\n 1 - Multiplication \n 2 - Somme et Moyenne \n 3 - Recherche voyelles \n 4 - Recherche caractères suivant")
switch(sw)
{
    case "1":
    Multiplication()
    break;

    case "2":
    Somme()
    break;

    case "3":
    Voyelles()
    break;

    case "4":
    Caractères()
    break;
}

function Multiplication()
{
    var nb1 = parseInt(prompt("Entrez un premier nombre"))
    var nb2 = parseInt(prompt("Entrez un deuxieme nombre"))
    alert(nb1 * nb2)
}
function Somme(){
    var total = 0, compteur = 0, moyenne = null, entier = null;

    while (entier != 0)
    {
        total += entier;
        compteur++;
        var entier = parseInt(prompt("Saisir un nombre entier \nSaissisez '0' pour mettre fin a la boucle."));        
    }
    alert("Moyenne : " + total/compteur);
}

function Voyelles(){

}

function Caractères(){

}