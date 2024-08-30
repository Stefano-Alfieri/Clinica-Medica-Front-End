  // Seleziona gli elementi del DOM
  const select1 = document.getElementById('select1');
  const select2 = document.getElementById('select2');
  const tableBody = document.querySelector('#prenotazioni-table tbody');

  // Event listener per abilitare e popolare il secondo select
  select1.addEventListener('change', function () {
      const selectedSpecializzazione = select1.value;

      // Abilita il secondo select solo se è stata fatta una selezione nel primo
      if (selectedSpecializzazione) {
          fetchMediciBySpecializzazione(selectedSpecializzazione);
      } else {
          // Disabilita e resetta il secondo select se non è selezionato nulla
          select2.disabled = true;
          select2.innerHTML = '<option value="" selected>Seleziona un\'opzione</option>';
          tableBody.innerHTML = ''; // Svuota la tabella delle disponibilità
      }
  });

  // Funzione per recuperare i medici dalla specializzazione selezionata
  function fetchMediciBySpecializzazione(specializzazione) {
      fetch(`http://localhost:8080/medici/searchBySpecializzazione?specializzazione=${encodeURIComponent(specializzazione)}`)
          .then(response => response.json())
          .then(data => {
              // Pulisce le opzioni esistenti
              select2.innerHTML = '<option value="" selected>Seleziona un medico</option>';

              // Popola il select2 con i medici ricevuti
              data.forEach(medico => {
                  const opt = document.createElement('option');
                  opt.value = medico.id; // Usa l'id del medico per valore
                  opt.textContent = `${medico.nome} ${medico.cognome}`; // Mostra il nome e cognome
                  select2.appendChild(opt);
              });

              // Abilita il select dei medici se ci sono medici disponibili
              select2.disabled = data.length === 0;
          })
          .catch(error => {
              console.error('Errore nel recupero dei medici:', error);
              // Disabilita il select in caso di errore
              select2.disabled = true;
              select2.innerHTML = '<option value="" selected>Nessun medico disponibile</option>';
          });
  }

   // Event listener per il secondo select per recuperare le disponibilità
   select2.addEventListener('change', function () {
    const medicoId = select2.value;

    // Recupera e mostra le disponibilità solo se un medico è stato selezionato
    if (medicoId) {
        fetchDisponibilitaByMedicoId(medicoId);
    } else {
        tableBody.innerHTML = ''; // Svuota la tabella se nessun medico è selezionato
    }
});

// Funzione per recuperare le disponibilità di un medico
function fetchDisponibilitaByMedicoId(medicoId) {
    fetch(`http://localhost:8080/disponibilita/searchDisponibilitaAttiveByMedicoId?medico_id=${medicoId}`)
        .then(response => response.json())
        .then(data => {
            clearTable();
            data.forEach(disp => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${disp.dataDisp}</td>
                    <td>${disp.oraDisp}</td>
                    <td><button class="btn btn-primary" data-id="${disp.id}">Prenota</button></td>
                `;
                tableBody.appendChild(row);
            });
             // Aggiungi un event listener ai pulsanti
             document.querySelectorAll('#prenotazioni-table .btn-primary').forEach(button => {
                button.addEventListener('click', handlePrenotazioneClick);
            });
        })
        .catch(error => {
            console.error('Errore nel recupero delle disponibilità:', error);
            clearTable();
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="3">Nessuna disponibilità trovata</td>`;
            tableBody.appendChild(row);
        });
}

// Funzione per svuotare la tabella
function clearTable() {
    tableBody.innerHTML = '';
}


 function findPazienteId() {
    const token = localStorage.getItem('authToken');
    fetch('http://localhost:8080/auth/searchPazienteByToken?token=' + token)
        .then(resp => resp.text())
        .then(pazienteId => {
           const pazienteID=pazienteId;
        });
}

