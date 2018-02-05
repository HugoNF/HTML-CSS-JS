/* -----------------------------------------------
      💩💩💩💩💩LE DOM💩💩💩💩💩
---------------------------------------------------*/

/* -- Le DOM est une interface de développement en JS
    pour HTML. Grâce au DOM, je vais être en mesure
    d'accèder / modifier mon HTML.

    L'Objet "document" : c'est le point d'entre vers
    mon contenu HTML !

    Chaque page chargée dans mon navigateur à un
    objet "document". -- */   
    
    // -- Comment puis-je faire pour récupérer les différentes informations de ma page HTML ?


/* -- document.getElementById

document.getElementById() : C'est une fonction
qui va permettre de récupérer un élément HTML
à partir de son identifiant unique : ID -- */

let Bonjour = document.getElementById("Bonjour");
console.log(Bonjour);


/* -- document.getElementByClassName

document.getElementByClassName() : C'est une fonction 
qui va permettre de récupérer un ou
plusieurs éléments (une liste) HTML à partir
de leur classe. -- */ 


var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

/* -- document.getElementByTagName

document.getElementByTagName() : C'est une fonction 
qui va permettre de récupérer un ou
plusieurs éléments (une liste) HTML à partir
de leur * nom de balise * . -- */ 

var span = document.getElementsByTagName("span");
console.log(span);


