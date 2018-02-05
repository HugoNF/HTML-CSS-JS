<?php
include "functions.php";
$longueur = $_POST['longueur'];
$largeur = $_POST['largeur'];
$hauteur = $_POST['hauteur'];

if(calculerVolume($longueur,$largeur,$hauteur)){
    echo("La surface est de : " . calculerVolume($longueur,$largeur,$hauteur));
}