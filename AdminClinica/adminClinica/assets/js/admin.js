function init(){
    isUserLoggedIn()
    caricamentoNum()
    getNomeUtente()
}

function caricamentoNum(){
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    
    fetch('http://localhost:8080/medici/number')
    .then(resp => resp.text())
        .then(numero1 => {
            num1.innerHTML = numero1;
        });
        
    fetch('http://localhost:8080/pazienti/number')
    .then(resp => resp.text())
        .then(numero2 => {
            num2.innerHTML = numero2;
        });
        
        fetch('http://localhost:8080/personale/number')
        .then(resp => resp.text())
            .then(numero3 => {
                num3.innerHTML = numero3;
            });   
             
}
function getNomeUtente(){
    const nome= document.getElementById("nomeUtente");
    const token = localStorage.getItem('authToken');
    fetch('http://localhost:8080/auth/searchAdminByToken?token=' + token)
        .then(resp => resp.text())
        .then(adminId => {
            fetch('http://localhost:8080/personale/' + adminId)   
            .then(resp => resp.json())
            .then(admin => {

                nome.innerHTML =admin.nome+' '+admin.cognome;
            });
        });
}


async function isUserLoggedIn() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = "../../Accedi.html";
        return;
    }

    // Controllo il ruolo dell'utente
    fetch('http://localhost:8080/auth/SearchRuoloByToken?token=' + token)
        .then(resp => resp.text())
        .then(ruolo => {
            if (ruolo !== "admin") {
                window.location.href = "../../home.html";
            }
        });
}


window.onload = init();
