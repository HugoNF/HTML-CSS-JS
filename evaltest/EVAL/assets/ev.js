$(function() {
    // ecouter envoi du formulaire
    $('#monForm').submit(function(e) {
        
        // On empeche le formulaire de s'envoyer 
        e.preventDefault()

        // les variables 
        chat = $('select') //   div <select>
        raisons = $('textarea') // div <textarea>
        test = true;

        // On enlève les anciennes erreurs 
        $('.text-danger').remove()


            // Test chats
                if(chat.val() == "") {
                    chat.parent().append('<p class="text-danger"> Veuillez remplir ce champ </p>')
                    test = false;
                }
        

            // Test du text area                    
                if(raisons.val().length < 10) {
                    raisons.parent().append('<p class="text-danger"> Veuillez remplir ce champ </p>')
                    test = false;
                }
            
        // On test les variables chat et raisons
        if(test) {
            // En cas de succès, on vide le .container et on affiche une notification de succès (Dans mon code, le .container est l'élément qui contient le formulaire et l'image, adaptez vous à votre code)
            $('.container').empty().append('<span class="alert alert-success"> Toutes nos félicitations vous avez adopté un chat')
        }
          
    })
})