function init(){
    isUserLoggedIn()
    caricamentoNum()
    getNomeUtente()
    getAdminList()
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
function getAdminList(){
//funzione per caricare lista admin in tabella
fetch('http://localhost:8080/personale')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('tbodyPers');

    data.forEach(admin => {
        const row = document.createElement('tr');

        // Crea le celle per ciascun campo del medico
        const nomeCell = document.createElement('td');
        nomeCell.textContent = admin.nome;

        const cognomeCell = document.createElement('td');
        cognomeCell.textContent = admin.cognome;

        const emailCell = document.createElement('td');
        emailCell.textContent = admin.email;

        const roleCell = document.createElement('td');
        roleCell.textContent = admin.role;

        // Aggiungi le celle alla riga
        row.appendChild(nomeCell);
        row.appendChild(cognomeCell);
        row.appendChild(emailCell);
        row.appendChild(roleCell);

        // Aggiungi la riga al corpo della tabella
        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error('Errore nel recuperare i dati dei medici:', error);
});
}




window.onload = init();
