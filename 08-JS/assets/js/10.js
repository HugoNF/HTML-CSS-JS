/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- AH

var PremierTrimestre = [
    
    {
        prenom      : "Hugo ",
        nom         : "Ratel ",
        notes       :{
                        français     :  19,
                        mathematique :  21,
                        histoire     :  20,
                        science      :  07,
                        anglais      :  18
                    }
    },
    {
        prenom      : "Hocine ",
        nom         : "Alili ",
        notes       :{
                        français     :  15,
                        mathematique :  13,
                        histoire     :  02,
                        science      :  06,
                        anglais      :  09
                    }
    },
    {
        prenom      : "Théo ",
        nom         : "Da Costa ",
        notes       :{
                        français     :  01,
                        mathematique :  01,
                        histoire     :  01,
                        science      :  01,
                        anglais      :  01
                    }
    },
    {
        prenom      : "Joffrey ",
        nom         : "Lhermitte ",
        notes       :{
                        français     :  10,
                        mathematique :  10,
                        histoire     :  10,
                        science      :  10,
                        anglais      :  10
                    }
    },
    {
        prenom      : "Jérome ",
        nom         : "Ballue ",
        notes       :{
                        français     :  16,
                        mathematique :  06,
                        histoire     :  16,
                        science      :  06,
                        anglais      :  19
                    }
    },
    {
        prenom      : "Gauthier ",
        nom         : "Bosson ",
        notes       :{
                        français     :  20,
                        mathematique :  14,
                        histoire     :  14,
                        science      :  10,
                        anglais      :  04
                    }
    }
    
];


function w(t) {
    document.write(t);
}
   
function l(e) {
    console.log(e);
}

l(PremierTrimestre);

w("<ol>");
for(let i=0 ; i < PremierTrimestre.length ; i++) {

    // -- On récupère l'Objet Etudiant de l'itération
    let etudiant = PremierTrimestre[i];

    // -- Aperçu dans la console
    l(etudiant);

    var NombreDeMatiere = 0, SommeDesNotes = 0;
    // -- Afficher le Prénom et le Nom d'un étudiant
    w("<li>");
    w(etudiant.prenom +" " + etudiant.nom + " ");
    w("<ul>");
    for (let matiere in etudiant.notes) {
        l(matiere);
        l(etudiant.notes[matiere]);

        NombreDeMatiere++;
        SommeDesNotes += etudiant.notes[matiere];

        w("<li>");
            w(matiere + " : " + etudiant.notes[matiere]);
        w("</li>");
    } //-- Fin de la boucle matiere
        w("<li>");
            w("<strong>Moyenne générale :</strong>" +(SommeDesNotes / NombreDeMatiere).toFixed(2) )
        w("</li>");
    w("</ul>");
    w("</li>");
}
w("</ol>");