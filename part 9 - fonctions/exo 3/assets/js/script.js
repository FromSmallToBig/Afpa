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
    var voyelles = 0;
    var mot = prompt("Saisir un mot :");           
    for (i=0 ;i < mot.length; i++)
    {
       if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
       {	
           voyelles++;
       }
    }
    
    alert("Nombre de voyelles dans : " + mot + " est de " + voyelles);

}

function Caractères(){
    var phrase = prompt("entrez un mot ou une phrase");
    var lettre = prompt("entrez une lettre");
    
    var compteur=0;
    var longueur=texte.length;

    alert(longueur);
    
    for(i=0;i<=longueur;i++)
    {
       var d=texte.substr(i,1);
       if (lettre==d)
       {
          compteur++;
       }
    }

    alert(compteur);
}