/* -----------------------------------------------
      💩💩💩💩💩LES CONDITIONS💩💩💩💩💩
---------------------------------------------------*/

/*var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR) {
        alert("Bienvenue !");
}else {
    alert("Google....");
}*/

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */
// Initialisation des variables
/*var MajoriteLegaleFR = 18;

// Ouverture de la fonction
function verifierAge() {

    // Demande de l'age
        // METHODE 1
        // let age = prompt("🤡Hello  Quel age abdul a !","<Saisir votre Age>");
        // parseInt(age);
        // return age;

        // METHODE 2
        return parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));
}
        

    // Si il est majeur
    if(verifierAge() >= MajoriteLegaleFR) {
        alert("Bienvenue !");
    }else {
        alert("Vous n'avez pas l'age requis");

        document.location.href="http://google.fr";
    }

verifierAge();*/

/* ---------------------------------------------------------------
      💩💩💩💩💩LES OPERATEURS DE COMPARAISON💩💩💩💩💩
      L'opérateur de comparaison "==" signifie : Egal à
      il permet de vérifier que 2 variables sont identiques

      L'opérateur de comparaison "===" signifie : Strictement Egal
      à. Il va comparer la valeur et le type de donnée.

      L'opérateur de comparaison "!=" signifie : Différent de
      L'opérateur de comparaison "!==" signifie : Strictement
      Différent de
-------------------------------------------------------------------*/
/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
// var email, mdp;

// email = "wf3@hl-media.fr";
// mdp = "wf3";


// var mail = prompt("saisissez votre email", "Saisir votre adresse e-mail");
// if(mail === email) {
//     var password = prompt("saisissez votre mdp", "Saisir votre mdp");
// }else {
//     alert("pas bon !");
// }

// if (mail===email & password===mdp){
//     alert("Bienvenue !");
// }
// else {
//     alert("NTM !");
// }
            // // CORRECTION // // 
            
            
            
// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// 1 -- Demander son Email à l'utilisateur
var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

// 2 -- Je vérifie si l'email saisie (emailUser) correspond à celui en BDD (email)
if(emailUser === email) {
    // 2a. -- Tous est ok, je continu la vérification avec le mot de passe.
    // 2a1. -- Je demande à l'utilisateur son MDP
    var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

    if(mdpUser === mdp) {
        alert("Bienvenue !");
    } else {
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
    }

} else {
    // 2b. -- Sinon, les emails ne correspondent pas, je lance une Alert...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email");
}

// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si mon utilisateur est présent en BDD
 */
function monUtilisateurEstCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    }
    else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser);
} else {
    alert("ATTENTION, email/mot de passe incorrect");


/* -------------------------------------------------------
      💩💩💩💩💩LES OPERATEURS LOGIQUES💩💩💩💩💩
-----------------------------------------------------------*/

// L'opérateur ET : && ou AND 
// Si la combinaison emailuser et email correspond ET la combinaison mdpUser et mdp correspond.

// Dans cette condition, les deux doivent OBLIGATOIREMENT correspondre pour être validée.

if(emailUser === email && mdpUser === mdp) /*{. . .}*/

// L'opérateur OU : || ou OR
// Si la combinaison emailUser et email correspond OU la combinaison mdpUser et mdp correspond.

// Ici, dans cette condition, au moins l'une des deux doit correspondre pour être validée.

if(emailUser === email || mdpUser === mdp) /*{. . .}*/

// L'opérateur "!" : qui signifie le CONTRAIRE DE... ou encore NOT

var monUtilisateurEstApprouve = true;
if(!monUtilisateurEstApprouve) /* {. . .} */ // -- Si l'utilisateur n'est pas prouvé ...

// Reviens également à écrire
if(monUtilisateurEstApprouve == false);

