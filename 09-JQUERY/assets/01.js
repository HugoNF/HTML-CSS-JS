/* --------------------------------------------------
      💩💩💩💩💩LA DISPONIBILITE DU DOM💩💩💩💩💩
------------------------------------------------------*/


/* -- A partir du moment ou mon DOM, c'est ç dire l'ensemble
de l'arborescence ma page est complétement chargé,
je peux commencer à utiliser Jquery.

Je vais mettre l'ensemble de mon code dans une fonction,
cette fonction sera appelé AUTOMATIQUEMENT Jquery
lorsque le DOM sera entièrement défini. -- */ 

// -- 3 façons de faire :


jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 2ème possibilité
$(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});



$(function(){  
    alert("j'ai 20 ans !");
// -- En JQuery, sont les mêmes qu'en CSS
    $("#TexteEnJQuery").html("Mon Texte en JQ !");
});