var i = 0;
var name;

do {
       i++;
       name = prompt("mettez votre prenom : N°" + i);
       console.log("Prenom : " + name);
} while (name != "")

console.log("Nombre de prenom inscrits : " + (i -= 1));


