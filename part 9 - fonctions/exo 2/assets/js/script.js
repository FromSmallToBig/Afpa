var tour = 0, i = 0,lettre = prompt("Veuilliez mettre une lettre"),phrase = prompt("Veuilliez mettre une phrase")
for (i = 0; i < phrase.length; i++)
{
   if (phrase[i] == lettre) 
   {	
       tour++;
   }
}
alert("La lettre " + lettre + " est apparu " + tour + " fois dans la phrase : " + phrase);
