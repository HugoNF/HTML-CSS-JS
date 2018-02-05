/* --------------------------------------------------
      💩💩💩💩💩LES SELECTEURS JQUERY💩💩💩💩💩
------------------------------------------------------*/

// -- Format : $("selecteurs")
// -- En jQuery, tous les sélecteurs CSS sont disponibles...

$(function(){
    // -- DOM READY !
    // -- LesFlemmards.js
    function l(e){
    console.log(e);
}
// -- Sélectionner les balises SPAN :
    // Version Javascript :
    l(document.getElementsByTagName("span"));

    // Version jQuery
    l($("span"));

// -- Sélectionner mon Menu

    // Version Javascript
    l(document.getElementById("menu"));

    // Version jQuery
    l($("#menu"));

// -- Sélectionner une Classe

    // Version Javascript :
    l(document.getElementsByClassName("MaClasse"));

    // Version jQuery :
    l($(".MaClasse"));

// -- Sélectionner un Attribut

    // Version jQuery :
    l($("[href= 'https//www.google.fr']"))


})