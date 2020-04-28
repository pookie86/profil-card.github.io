// Création d'une requête HTTP GET avec AJAX

function ajaxGet(url, callback) {

    var req = new XMLHttpRequest();
        req.open("GET", url, false); //Requete HTTP GET vers l'url
        req.addEventListener("load", function () {

    if (req.status >= 200 && req.status < 400 ) { // Le serveur a réussi à traiter la requête

            callback(req.responseText); // Affiche la réponse reçue pour la requête // Appelle la fonction callback en lui passant la réponse de la requête

    } else {

            console.error(req.status + "" + req.statusText + "" + url); // Affichage des informations sur l'échec du traitement de la requête
    }
});

        req.addEventListener("error", function () {

            console.error(" Erreur reseau :" + url);     // La requête n'a pas réussi à atteindre le serveur
        });
        req.send(null); //Envoi de la requete
}

