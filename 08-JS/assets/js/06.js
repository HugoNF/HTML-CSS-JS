/* -----------------------------------------------
      💩💩💩💩💩LES FONCTIONS💩💩💩💩💩
---------------------------------------------------*/

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    // -- Lors de l'appel de cette fonction, les instructions
      // ci-dessous seront exécutées...
    alert("Bonjour !");
}

// -- Je vais appeler ma fonction "ditBonjour" et déclencher
      // ses instructions.

ditBonjour();

// -- Déclarer une fonction qui prend une variable en paramètre
function Bonjour(Prenom, Nom) {
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> ! </p>");
}

// -- Appeler / utiliser une fonction avec des paramètres
Bonjour("Hugo", "RATEL");

var monPrenom ="Hugo";
var monNom    ="Ratel";

Bonjour(monPrenom,monNom);

/*---------------------------------------------
exercice :
Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre 
---------------------------------------------*/

function Addition(nb1,nb2) {
    return nb1 + nb2;
}

document.write("<p> " + addition(10, 5) + "</p>");
