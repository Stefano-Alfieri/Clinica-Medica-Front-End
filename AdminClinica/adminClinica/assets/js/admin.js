function isUserLoggedIn(){
    const token = localStorage.getItem('authToken');
    if (!token || token.ruolo!="admin"){
        window.location.href="../../Accedi.html"
    }
}
window.onload=isUserLoggedIn;