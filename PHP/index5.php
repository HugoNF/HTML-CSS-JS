<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Titre</title>
</head>
<body>
    <form method="post" action="calcul.php">
        <div>
            <label for="longueur">Longueur : </label>
            <input type="text" name="longueur"/>
        </div>
        <div>
            <label for="largeur">Largeur : </label>
            <input type="text" name="largeur"/>
        </div>  
        <div>
            <label for="hauteur">Hauteur : </label>
            <input type="text" name="hauteur"/>
        </div>  
        <div>
            <input type="submit" value="Calculer"/>
        </div>
    </form>
</body>
</html>