var n1 = parseInt(prompt("Premier chiffre"));  
var n2 = parseInt(prompt("Deuxieme chiffre"));  
var total = 0;      

for (o = n1; o <=n2 ; o++)
{
    total = total + o; 
}         
alert("Intervalle additionnel entre "+n1+" et "+n2+" = " + total);