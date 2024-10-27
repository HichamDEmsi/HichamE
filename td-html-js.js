document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "") {
        alert("Le nom ne peut pas être vide.");
    } else if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
    } else {
        alert("Formulaire soumis avec succès !");
        // Ici, tu peux ajouter du code pour envoyer le formulaire
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
