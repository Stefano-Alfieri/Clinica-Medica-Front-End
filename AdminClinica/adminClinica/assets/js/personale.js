function init(){
    isUserLoggedIn()
    getNomeUtente()
    getAdminList()
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

            const azioni = document.createElement('td');
                azioni.innerHTML = `
            <td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_Specialities_details">
																<i class="fe fe-pencil"></i> Modifica
															</a>
															<a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
																<i class="fe fe-trash"></i> Elimina
															</a>
														</div>
													</td>
            `
    
            // Aggiungi le celle alla riga
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(emailCell);
            row.appendChild(roleCell);
            row.appendChild(azioni);

            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati del personale:', error);
    });
    }
    
    async function signPersonale(){
        const nome = document.getElementById("nomeSpecialities").value;
        const cognome = document.getElementById("cognomeSpecialities").value;
        const email = document.getElementById("emailSpecialities").value;
        const role = document.getElementById("roleSpecialities").value;
        const password = document.getElementById("passwordSpecialities").value;
        try {
            const response = await fetch('http://localhost:8080/personale', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cognome,email,nome, password, role })
            });
            window.location.href="./specialities.html"
        }catch (error) {
        console.error('Error during login:', error);
    }
    }
    
    
    window.onload = init();
    