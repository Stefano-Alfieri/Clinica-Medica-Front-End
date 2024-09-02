function init(){
    isUserLoggedIn();    
    getPrenotazioni();
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


function getPrenotazioni(){
    //funzione per caricare lista admin in tabella
    fetch('http://localhost:8080/prenotazioni/searchActiveAppointment')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tbodyPren');
    
        data.forEach(prenotazione => {
            console.log(prenotazione);
            const row = document.createElement('tr');
    
            // Crea le celle per ciascun campo del medico
            const pazienteCell = document.createElement('td');
            pazienteCell.textContent = prenotazione.paziente.id;
            const nomeCell = document.createElement('td');
            nomeCell.textContent = prenotazione.paziente.nome;
    
            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = prenotazione.paziente.cognome;
    
            const emailCell = document.createElement('td');
            emailCell.textContent = prenotazione.disponibilita.oraDisp;
    
            const roleCell = document.createElement('td');
            roleCell.textContent = prenotazione.disponibilita.dataDisp;

            const medicoCell = document.createElement('td');
            medicoCell.textContent = prenotazione.disponibilita.medico.id;

            let idDel=prenotazione.id;

            const azioni = document.createElement('td');
                azioni.innerHTML = `
            <td class="text-right">
														<div class="actions">
															<a  data-toggle="modal" href="#delete_modal${idDel}" data-id="${idDel}" class="btn btn-sm bg-danger-light">
																<i class="fe fe-trash"></i> Elimina
															</a>
														</div>
                                                        <!-- Delete Patient Modal -->
					<div class="modal fade" id="delete_modal${idDel}" aria-hidden="true" role="dialog">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-body">
									<div class="form-content p-2">
										<h4 class="modal-title">Elimina Prenotazione</h4>
										<p class="mb-4">Sei sicuro di voler eliminare questa prenotazione?</p>
										<button type="button" onclick="deletePrenotazione(event)" data-id="${idDel}" class="btn btn-primary">Elimina</button>
										<button type="button" class="btn btn-danger" data-dismiss="modal">Chiudi</button>
									</div>
								</div>
							</div>
						</div>
					</div>
													</td>
            `
    
            // Aggiungi le celle alla riga
            row.appendChild(pazienteCell);
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(emailCell);
            row.appendChild(roleCell);
            row.appendChild(medicoCell);
            row.appendChild(azioni);

            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati delle prenotazioni:', error);
    });
    }


    function deletePrenotazione(event) {
        let bottone=event.target;
        let id=bottone.getAttribute("data-id");

            fetch('http://localhost:8080/prenotazioni/' + id, {
                 method: 'DELETE',
                });
                window.location.href="appointment-list.html"
            };





window.onload = init();