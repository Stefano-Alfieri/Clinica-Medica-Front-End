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
            let idDel=admin.id;
            const azioni = document.createElement('td');
                azioni.innerHTML = `
            <td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" data-id="${idDel}" href="#edit_Specialities_details">
																<i class="fe fe-pencil"></i> Modifica
															</a>
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
										<h4 class="modal-title">Elimina Personale</h4>
										<p class="mb-4">Sei sicuro di voler eliminare questo dipendente?</p>
										<button type="button" onclick="deleteAdmin(event)" data-id="${idDel}" class="btn btn-primary">Elimina</button>
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
    
    function deleteAdmin(event) {
        let bottone=event.target;
        let id=bottone.getAttribute("data-id");
        console.log(bottone);
        console.log(id);
            fetch('http://localhost:8080/personale/' + id, {
                 method: 'DELETE',
                });
                window.location.href="specialities.html"
            };
    
    window.onload = init();
    