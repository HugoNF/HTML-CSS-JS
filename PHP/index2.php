    <?php
    $resultat = "<ul>";
    for($i = 2 ; $i <= 128 ; $i+=2) {
        if($i % 5 == 0) {
        $resultat .="<li>" . $i . "</li>";
        for($j = 1 ; $j <= 10 ; $j++)
        if($j % 3 == 0) { 
            $resultat .= "<ul>" . "<li>" . $j . "</li>" . "</ul>";
            }
        }
    }
    $resultat .= "</ul>";

    echo($resultat);
    
   
        
    