<?php
$valeur = mt_rand(-1000,1000);
echo("<p>La valeur test est : $valeur</p>");

if ($valeur < 0)
$message = "La valeur est négative";

elseif ($valeur > 0)
$message = "La valeur est positive";

else 
    $message = "La valeur est nulle";
    
echo("<p>$message</p>");

$valeur = mt_rand();
$message ="<h1>$valeur</h1>";

for($i=1 ; $i<=10 ; $i++) {
    if($valeur % $i== 0)
        $message .= "<p>La $valeur est un multiple de $i</p>";  
}
echo($message);


?>