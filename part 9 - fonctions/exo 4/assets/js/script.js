var str1 = "robert; dupont; amiens; 80000"
var str2 = "; "
var n = 2

function strtok(str1, str2, n){
   var str = str1.split(str2)
   return str[n]
}


alert(strtok(str1, str2, n))