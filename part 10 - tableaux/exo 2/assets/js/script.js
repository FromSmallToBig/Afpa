function iniTab(tab)
      {
          var len = parseInt(prompt("Entrez la taille de votre tableau"));
          tab = [len]; 
          return len;  
          console.log(len);
      }
  function saisieTab(tab, len)
      {
          var i=0;
          while(i<len){
              var valeur=parseInt(prompt("Entrez les valeurs du tableau")); 
              tab.push(valeur);
            i++;       
          }
      }
      function afficheTab (tab)
          {
              console.log(tab);
          }
  function tri(tab, len){
          while(len>0)     
          {
              while(i<len)   
              {
                  if(tab[i+1]<tab[i])  
                  {
                      temp = tab[i];  
                      tab[i]=tab[i+1];
                      tab[i+1]=temp;
                  }
                  i++;  
              }
              i=0;   
              len--;  
          }
  }
  var temp=0;        
  var tab=[];
  var len = iniTab(tab);
  var i = 0;
  saisieTab(tab,len);
  tri(tab,len);
  afficheTab(tab);