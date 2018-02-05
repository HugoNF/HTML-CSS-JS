/* --------------------------------------------------
      💩💩💩💩💩LES SELECTEURS JQUERY💩💩💩💩💩
------------------------------------------------------*/

$(function(){
    // -- Je souhaite cacher toutes les div de ma page HTML
    // console.log($("div"));

    $("div").hide("slow", function(){
    // -- une fois que la méthode hide()est terminée, mon alerte peut s'executer
    alert("Fin Du Hide");

    // -- NOTA BENE : La fonction s'executera pour l'ensemble des éléments du sélecteur.

    // -- CSS
    $("div").css("background","yellow");
    $("div").css("color","red");

    $("div").show("slow");
    });// Fin fonction anonyme

    // -- En utilisant le chainage de méthode, vous pouvez faire s'enchainer plusieurs fonctions les unes après les autre...

    $("p").hide(1000).css("color","blue").css("font-size","20px").delay(2000).show(500);

    // -- MAIS, C'EST ENCORE TROP LONG !!!!!!!!!!!!
    $("p").hide(1000).css({"color" :"green","font-size": "20px"}).delay(2000).show(500);
});