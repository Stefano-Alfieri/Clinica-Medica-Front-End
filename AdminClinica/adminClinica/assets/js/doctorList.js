function init(){
    isUserLoggedIn();    
    getDoctorList();
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

async function signDoctor(){
    const token = localStorage.getItem('authToken');
    const nome = document.getElementById("nomeDoc").value;
    const cognome = document.getElementById("cognomeDoc").value;
    const email = document.getElementById("emailDoc").value;
    const telefono = document.getElementById("telefonoDoc").value;
    const specializzazione = document.getElementById("specializzazioneDoc").value
    const password = document.getElementById("passwordDoc").value;
    try {
        const response = await fetch('http://localhost:8080/medici', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ cognome,email,nome, password, specializzazione, telefono })
        });
    }catch (error) {
    console.error('Error during login:', error);
}
}

function getDoctorList(){
    //funzione per caricare lista admin in tabella
    fetch('http://localhost:8080/medici')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tbodyMed');
    
        data.forEach(medico => {
            const row = document.createElement('tr');
    
            // Crea le celle per ciascun campo del medico
            const nomeCell = document.createElement('td');
            nomeCell.textContent = medico.nome;
    
            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = medico.cognome;
    
            const emailCell = document.createElement('td');
            emailCell.textContent = medico.email;

            const telefonoCell = document.createElement('td');
            telefonoCell.textContent = medico.telefono;
    
            const specializzazioneCell = document.createElement('td');
            specializzazioneCell.textContent = medico.specializzazione;

            const azioni = document.createElement('td');
            azioni.innerHTML=`
            <td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
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
            row.appendChild(telefonoCell);
            row.appendChild(specializzazioneCell);
            row.appendChild(azioni); 
            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati dei medici:', error);
    });
    }
window.onload = init();
