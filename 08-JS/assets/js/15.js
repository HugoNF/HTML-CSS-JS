var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(NosPrenoms.length);

console.log(NosPrenoms[1]);
console.log(NosPrenoms[3]);
console.log(NosPrenoms[4]);

var i = 2;
console.log(NosPrenoms[i]);

for(let i=0 ; i<NosPrenoms.length ; i++){
console.log(i + " " + NosPrenoms[i])};


var Contact = {
    prenom : "Hugo",
    nom    : "RATEL",
    tel    : "07.50.50.35.20"
}

console.log(Contact);

console.log("prenom : " + Contact.prenom);
console.log("nom : " + Contact.nom);
console.log("tel : " + Contact.tel);

var NvTableau = [
    {
        prenom  :"Hugo",
        nom     :"RATEL",
        classe  :"Programmation"
    },
    {
        prenom  :"Etienne",
        nom     :"DIT JESUS",
        classe  :"Maternel"
    },
    {
        prenom  :"Theo",
        nom     :"DA COSTA",
        classe  :"Memer"
    },
    {
        prenom  :"Abdul",
        nom     :"GAMING",
        classe  :"Gaming"
    },
]

console.log(NvTableau)
var nombreetudiant = NvTableau.length;
console.log("Le nombre d'étudiant est : " + nombreetudiant);
document.write("<ul>")
for(i = 0 ; i<nombreetudiant; i++){
    let etudiant = NvTableau[i];
    document.write("<li>" + etudiant.prenom + " " + etudiant.nom + " " + etudiant.classe+"</li>");
}
document.write("<ul>")