<?php
$titre = "<h1>Titre</h1>";
$message = "<p>Ok bah t'es débile</p>";
$prenom = "Zank";
$prenom .= " NOEL";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>


<?php
$abdul = "<h1>pk se message est premier</h1>";
echo($abdul);
echo($titre);
echo($message);
echo("<p>Bonjour  \"$prenom\"</p>")
?>

</body>
</html>