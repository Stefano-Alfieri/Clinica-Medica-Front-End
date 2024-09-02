function init(){
    isUserLoggedIn();    
    getPatientList();
    getNomeUtente()
}

async function logout(event) {
    event.preventDefault();
    const token = localStorage.getItem('authToken');
try {
    const response = await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        headers: {
            'Authorization': `${token}`
        }
    });

    if (response.status === 200) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('ruolo');
        window.location.href="../../home.html";
    } 
} catch (error) {
    console.error('Error during logout:', error);
}

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

function getPatientList(){
    //funzione per caricare lista pazieni in tabella
    fetch('http://localhost:8080/pazienti')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tbodyPaz');
    
        data.forEach(paziente => {
            const row = document.createElement('tr');
    
            // Crea le celle per ciascun campo del paziente
            const nomeCell = document.createElement('td');
            nomeCell.textContent = paziente.nome;
    
            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = paziente.cognome;
    
            const emailCell = document.createElement('td');
            emailCell.textContent = paziente.email;

            const telefonoCell = document.createElement('td');
            telefonoCell.textContent = paziente.telefono;
            let idDel=paziente.id;
            const azioni = document.createElement('td');
            azioni.innerHTML=`
             <td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" data-id="${idDel}" href="#edit_patient_details">
																<i class="fe fe-pencil"></i> Modifica
															</a>
															<a  data-toggle="modal" href="#delete_patient_modal${idDel}" data-id="${idDel}" class="btn btn-sm bg-danger-light">
																<i class="fe fe-trash"></i> Elimina
															</a>
														</div>
                                                        <!-- Delete Patient Modal -->
            <div class="modal fade" id="delete_patient_modal${idDel}"  aria-hidden="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="form-content p-2">
                                <h4 class="modal-title">Elimina Paziente</h4>
                                <p class="mb-4">Sei sicuro di voler eliminare questo paziente?</p>
                                <button type="button" onclick="deletePaziente(event)" data-id="${idDel}" class="btn btn-primary">Elimina</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
													</td>
            `
            // Aggiungi le celle alla riga
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(emailCell);
            row.appendChild(telefonoCell);
            row.appendChild(azioni); 
            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati dei pazienti:', error);
    });
    }

    async function signPatient(){
        const nome = document.getElementById("nomePaz").value;
        const cognome = document.getElementById("cognomePaz").value;
        const email = document.getElementById("emailPaz").value;
        const telefono = document.getElementById("telefonoPaz").value;
        const password = document.getElementById("passwordPaz").value;
        try {
            const response = await fetch('http://localhost:8080/pazienti', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cognome,email,nome, password, telefono })
            });
            window.location.href="./patient-list.html"
        }catch (error) {
        console.error('Error during login:', error);
    }
    }

    function deletePaziente(event) {
        let bottone=event.target;
        let id=bottone.getAttribute("data-id");
        console.log(bottone);
        console.log(id);
            fetch('http://localhost:8080/pazienti/' + id, {
                 method: 'DELETE',
                });
                window.location.href="patient-list.html"
            };
    


window.onload = init();