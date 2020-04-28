// Récuperer le form event Submit
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    // supprimer e par defaut
    e.preventDefault();

    // Récuperer le nom profil dans la valeur de l'element du form
    var pseudo = form.elements.profil.value; //name

    ajaxGet("https://api.github.com/users/" + pseudo, function (reponse) {

        // parse la reponse
        var profil = JSON.parse(reponse);

        // Créer et Récuperer img, name, company, blog, href
        var card = document.getElementById("card");

        var image = document.createElement("img");
            image.src = profil.avatar_url;
            image.id = "avatar";

        var nom = document.createElement("h1");
            nom.textContent = profil.name;

        // var lien = document.createElement("a");
        //     lien.textContent = profil.html_url;
        //     lien.href = profil.html_url;

        var repo = document.createElement("h2");
            repo.textContent = profil.public_repos + " Repositories" ;

        var bio = document.createElement("h3");
            bio.textContent = profil.bio;

        var lieu = document.createElement("h3");
            lieu.textContent = profil.location;

            var button = document.createElement("button");
                // button.textContent = "Voir";
            var a = document.createElement("a");
                a.textContent = "Voir";
                a.href = profil.html_url;
                button.appendChild(a);

        var info = image.outerHTML + nom.outerHTML + repo.outerHTML + bio.outerHTML + lieu.outerHTML + button.outerHTML;

            card.innerHTML += "<div class='card'>" + info +"</div>";
    });
});
