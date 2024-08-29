function isUserLoggedIn() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = "../../Accedi.html";
        return;
    }
    // Controllo il ruolo dell'utente
    const ruolo = localStorage.getItem('ruolo');
    if (ruolo !== "admin") {
        window.location.href = "../../home.html";
    }
}


window.onload = isUserLoggedIn;
