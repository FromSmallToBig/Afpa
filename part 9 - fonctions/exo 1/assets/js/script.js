var x = parseInt(prompt('Veuillez mettre un entier')), y = parseInt(prompt('Veuillez mettre un entier'))
function produit(x,y){
    document.write('Le cube de ' + x + ' est égal à : ' + x*x*x);
    document.write('<br>')
    document.write('Le produit de ' + x + " x " + y + ' est égal à : ' + (x*y));
}

function afficheimg(){
    document.write("<br><img alt='papillon bleu, orange et jaune' width='200px' title='papillon' src='papillon.jpg'>");
}

produit(x,y);
afficheimg();