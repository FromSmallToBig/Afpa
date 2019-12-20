var total = 0, compteur = 0, moyenne = null, entier = null;

while (entier != 0)
{
    total += entier;
    compteur++;
    var entier = parseInt(prompt("Saisir un nombre entier"));        
}
console.log("Moyenne : " + total/compteur);
