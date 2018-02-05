/* -------------------------------------------------------
      💩💩💩💩💩LES SELECTEURS D'ENFANTS💩💩💩💩💩
-----------------------------------------------------------*/

    // -- Les Flemmards.js
    $(function(){
        function l(e) {
            console.log(e);
        }


        // -- Je souhaite selectionner toutes mes divs
        l($("div"));


        // -- Je souhaite maintenant selectionner mon header
        l($("nav"));


        // -- Je souhaite tous les éléments descendant direct (enfants) qui sont dans le menu.
        l($("nav").children());

        // -- Je souhaite uniquement les éléments ul
        l($("nav").children("ul"));

        // -- Je souhaite récupérer tous les éléments li de mon ul
        l($("nav").children("ul").find("li"));

        // -- Je souhaite récupérer uniquement le 2eme élément de mes li
        l($("nav").children("ul").find("li").eq(1));

        // -- Je souhaite le voisin immédiat de mon menu
        l($("nav").next());
        l($("nav").next().next());// -- Le Voisin du Voisin
        l($("nav").prev())// -- Le Voisin d'avant

        // -- LES PARENTS
        l($("nav").parents());
});

