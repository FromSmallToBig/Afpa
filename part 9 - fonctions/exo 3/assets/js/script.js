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
    var i=0;
    var somme=0;
    var moyenne=0;
    var nombre=0;
    nb = parseInt(prompt("moyenne"));
    notes = new Array(nb);

    for(i=1;i<=nb;i++)
    {
       x = parseInt(prompt("entre un nombre"));
       notes[i-1] = parseInt(prompt("entre un second nombre"));
       somme = x + notes[i-1];
    }

  alert("la somme des nombres est : " + somme/nb);
}

function Voyelles(){

}

function Caractères(){

}