n = parseInt(prompt("Multiplier jusqu'à :"));
x = parseInt(prompt("Table de mulitplication du nombre :")); 
var resultat= 0;
    for(i=1; i<=n; i++)
    {
        resultat=i*x;
        console.log(x+ "x" +i+ "=" +resultat);
    }
