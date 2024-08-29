document.addEventListener('DOMContentLoaded', function () {
    // URL dell'endpoint con il parametro di specializzazione
    const url = 'http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Ginecologia';

    // Funzione per ottenere i dati dal server
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#medici-table tbody');

            // Pulisce il corpo della tabella prima di aggiungere nuovi dati
            tableBody.innerHTML = '';

            // Itera attraverso la lista dei medici e crea una riga per ciascuno
            data.forEach(medico => {
                const row = document.createElement('tr');

                // Crea le celle per ciascun campo del medico
                const nomeCell = document.createElement('td');
                nomeCell.textContent = medico.nome;

                const cognomeCell = document.createElement('td');
                cognomeCell.textContent = medico.cognome;

                const specializzazioneCell = document.createElement('td');
                specializzazioneCell.textContent = medico.specializzazione;

                const emailCell = document.createElement('td');
                emailCell.textContent = medico.email;

                const telefonoCell = document.createElement('td');
                telefonoCell.textContent = medico.telefono;

                // Aggiungi le celle alla riga
                row.appendChild(nomeCell);
                row.appendChild(cognomeCell);
                row.appendChild(specializzazioneCell);
                row.appendChild(emailCell);
                row.appendChild(telefonoCell);

       

                // Aggiungi la riga al corpo della tabella
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Errore nel recuperare i dati dei medici:', error);
        });
});


// URL dell'endpoint con il parametro di specializzazione

// Funzione per ottenere i dati dal server
fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Neurologia')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#medici-table2 tbody');

        // Pulisce il corpo della tabella prima di aggiungere nuovi dati
        tableBody.innerHTML = '';

        // Itera attraverso la lista dei medici e crea una riga per ciascuno
        data.forEach(medico => {
            const row = document.createElement('tr');

            // Crea le celle per ciascun campo del medico
            const nomeCell = document.createElement('td');
            nomeCell.textContent = medico.nome;

            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = medico.cognome;

            const specializzazioneCell = document.createElement('td');
            specializzazioneCell.textContent = medico.specializzazione;

            const emailCell = document.createElement('td');
            emailCell.textContent = medico.email;

            const telefonoCell = document.createElement('td');
            telefonoCell.textContent = medico.telefono;

            // Aggiungi le celle alla riga
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(specializzazioneCell);
            row.appendChild(emailCell);
            row.appendChild(telefonoCell);

            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati dei medici:', error);
    });



// Funzione per ottenere i dati dal server
fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Chirurgia Generale')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#medici-table3 tbody');

        // Pulisce il corpo della tabella prima di aggiungere nuovi dati
        tableBody.innerHTML = '';

        // Itera attraverso la lista dei medici e crea una riga per ciascuno
        data.forEach(medico => {
            const row = document.createElement('tr');

            // Crea le celle per ciascun campo del medico
            const nomeCell = document.createElement('td');
            nomeCell.textContent = medico.nome;

            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = medico.cognome;

            const specializzazioneCell = document.createElement('td');
            specializzazioneCell.textContent = medico.specializzazione;

            const emailCell = document.createElement('td');
            emailCell.textContent = medico.email;

            const telefonoCell = document.createElement('td');
            telefonoCell.textContent = medico.telefono;

            // Aggiungi le celle alla riga
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(specializzazioneCell);
            row.appendChild(emailCell);
            row.appendChild(telefonoCell);

            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati dei medici:', error);
    });


    // Funzione per ottenere i dati dal server
fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Oculistica')
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector('#medici-table4 tbody');

    // Pulisce il corpo della tabella prima di aggiungere nuovi dati
    tableBody.innerHTML = '';

    // Itera attraverso la lista dei medici e crea una riga per ciascuno
    data.forEach(medico => {
        const row = document.createElement('tr');

        // Crea le celle per ciascun campo del medico
        const nomeCell = document.createElement('td');
        nomeCell.textContent = medico.nome;

        const cognomeCell = document.createElement('td');
        cognomeCell.textContent = medico.cognome;

        const specializzazioneCell = document.createElement('td');
        specializzazioneCell.textContent = medico.specializzazione;

        const emailCell = document.createElement('td');
        emailCell.textContent = medico.email;

        const telefonoCell = document.createElement('td');
        telefonoCell.textContent = medico.telefono;

        // Aggiungi le celle alla riga
        row.appendChild(nomeCell);
        row.appendChild(cognomeCell);
        row.appendChild(specializzazioneCell);
        row.appendChild(emailCell);
        row.appendChild(telefonoCell);

        // Aggiungi la riga al corpo della tabella
        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error('Errore nel recuperare i dati dei medici:', error);
});


   // Funzione per ottenere i dati dal server
   fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Geriatria')
   .then(response => response.json())
   .then(data => {
       const tableBody = document.querySelector('#medici-table5 tbody');
   
       // Pulisce il corpo della tabella prima di aggiungere nuovi dati
       tableBody.innerHTML = '';
   
       // Itera attraverso la lista dei medici e crea una riga per ciascuno
       data.forEach(medico => {
           const row = document.createElement('tr');
   
           // Crea le celle per ciascun campo del medico
           const nomeCell = document.createElement('td');
           nomeCell.textContent = medico.nome;
   
           const cognomeCell = document.createElement('td');
           cognomeCell.textContent = medico.cognome;
   
           const specializzazioneCell = document.createElement('td');
           specializzazioneCell.textContent = medico.specializzazione;
   
           const emailCell = document.createElement('td');
           emailCell.textContent = medico.email;
   
           const telefonoCell = document.createElement('td');
           telefonoCell.textContent = medico.telefono;
   
           // Aggiungi le celle alla riga
           row.appendChild(nomeCell);
           row.appendChild(cognomeCell);
           row.appendChild(specializzazioneCell);
           row.appendChild(emailCell);
           row.appendChild(telefonoCell);
   
           // Aggiungi la riga al corpo della tabella
           tableBody.appendChild(row);
       });
   })
   .catch(error => {
       console.error('Errore nel recuperare i dati dei medici:', error);
   });


    // Funzione per ottenere i dati dal server
    fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Cardiologia')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#medici-table6 tbody');
    
        // Pulisce il corpo della tabella prima di aggiungere nuovi dati
        tableBody.innerHTML = '';
    
        // Itera attraverso la lista dei medici e crea una riga per ciascuno
        data.forEach(medico => {
            const row = document.createElement('tr');
    
            // Crea le celle per ciascun campo del medico
            const nomeCell = document.createElement('td');
            nomeCell.textContent = medico.nome;
    
            const cognomeCell = document.createElement('td');
            cognomeCell.textContent = medico.cognome;
    
            const specializzazioneCell = document.createElement('td');
            specializzazioneCell.textContent = medico.specializzazione;
    
            const emailCell = document.createElement('td');
            emailCell.textContent = medico.email;
    
            const telefonoCell = document.createElement('td');
            telefonoCell.textContent = medico.telefono;
    
            // Aggiungi le celle alla riga
            row.appendChild(nomeCell);
            row.appendChild(cognomeCell);
            row.appendChild(specializzazioneCell);
            row.appendChild(emailCell);
            row.appendChild(telefonoCell);
    
            // Aggiungi la riga al corpo della tabella
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Errore nel recuperare i dati dei medici:', error);
    });


     // Funzione per ottenere i dati dal server
     fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Ortopedia')
     .then(response => response.json())
     .then(data => {
         const tableBody = document.querySelector('#medici-table7 tbody');
     
         // Pulisce il corpo della tabella prima di aggiungere nuovi dati
         tableBody.innerHTML = '';
     
         // Itera attraverso la lista dei medici e crea una riga per ciascuno
         data.forEach(medico => {
             const row = document.createElement('tr');
     
             // Crea le celle per ciascun campo del medico
             const nomeCell = document.createElement('td');
             nomeCell.textContent = medico.nome;
     
             const cognomeCell = document.createElement('td');
             cognomeCell.textContent = medico.cognome;
     
             const specializzazioneCell = document.createElement('td');
             specializzazioneCell.textContent = medico.specializzazione;
     
             const emailCell = document.createElement('td');
             emailCell.textContent = medico.email;
     
             const telefonoCell = document.createElement('td');
             telefonoCell.textContent = medico.telefono;
     
             // Aggiungi le celle alla riga
             row.appendChild(nomeCell);
             row.appendChild(cognomeCell);
             row.appendChild(specializzazioneCell);
             row.appendChild(emailCell);
             row.appendChild(telefonoCell);
     
             // Aggiungi la riga al corpo della tabella
             tableBody.appendChild(row);
         });
     })
     .catch(error => {
         console.error('Errore nel recuperare i dati dei medici:', error);
     });


      // Funzione per ottenere i dati dal server
      fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Odontoiatria')
      .then(response => response.json())
      .then(data => {
          const tableBody = document.querySelector('#medici-table8 tbody');
      
          // Pulisce il corpo della tabella prima di aggiungere nuovi dati
          tableBody.innerHTML = '';
      
          // Itera attraverso la lista dei medici e crea una riga per ciascuno
          data.forEach(medico => {
              const row = document.createElement('tr');
      
              // Crea le celle per ciascun campo del medico
              const nomeCell = document.createElement('td');
              nomeCell.textContent = medico.nome;
      
              const cognomeCell = document.createElement('td');
              cognomeCell.textContent = medico.cognome;
      
              const specializzazioneCell = document.createElement('td');
              specializzazioneCell.textContent = medico.specializzazione;
      
              const emailCell = document.createElement('td');
              emailCell.textContent = medico.email;
      
              const telefonoCell = document.createElement('td');
              telefonoCell.textContent = medico.telefono;
      
              // Aggiungi le celle alla riga
              row.appendChild(nomeCell);
              row.appendChild(cognomeCell);
              row.appendChild(specializzazioneCell);
              row.appendChild(emailCell);
              row.appendChild(telefonoCell);
      
              // Aggiungi la riga al corpo della tabella
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Errore nel recuperare i dati dei medici:', error);
      });


       // Funzione per ottenere i dati dal server
       fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Chirurgia Specialistica')
       .then(response => response.json())
       .then(data => {
           const tableBody = document.querySelector('#medici-table9 tbody');
       
           // Pulisce il corpo della tabella prima di aggiungere nuovi dati
           tableBody.innerHTML = '';
       
           // Itera attraverso la lista dei medici e crea una riga per ciascuno
           data.forEach(medico => {
               const row = document.createElement('tr');
       
               // Crea le celle per ciascun campo del medico
               const nomeCell = document.createElement('td');
               nomeCell.textContent = medico.nome;
       
               const cognomeCell = document.createElement('td');
               cognomeCell.textContent = medico.cognome;
       
               const specializzazioneCell = document.createElement('td');
               specializzazioneCell.textContent = medico.specializzazione;
       
               const emailCell = document.createElement('td');
               emailCell.textContent = medico.email;
       
               const telefonoCell = document.createElement('td');
               telefonoCell.textContent = medico.telefono;
       
               // Aggiungi le celle alla riga
               row.appendChild(nomeCell);
               row.appendChild(cognomeCell);
               row.appendChild(specializzazioneCell);
               row.appendChild(emailCell);
               row.appendChild(telefonoCell);
       
               // Aggiungi la riga al corpo della tabella
               tableBody.appendChild(row);
           });
       })
       .catch(error => {
           console.error('Errore nel recuperare i dati dei medici:', error);
       });


       // Funzione per ottenere i dati dal server
       fetch('http://localhost:8080/medici/searchBySpecializzazione?specializzazione=Dermatologia')
       .then(response => response.json())
       .then(data => {
           const tableBody = document.querySelector('#medici-table10 tbody');
       
           // Pulisce il corpo della tabella prima di aggiungere nuovi dati
           tableBody.innerHTML = '';
       
           // Itera attraverso la lista dei medici e crea una riga per ciascuno
           data.forEach(medico => {
               const row = document.createElement('tr');
       
               // Crea le celle per ciascun campo del medico
               const nomeCell = document.createElement('td');
               nomeCell.textContent = medico.nome;
       
               const cognomeCell = document.createElement('td');
               cognomeCell.textContent = medico.cognome;
       
               const specializzazioneCell = document.createElement('td');
               specializzazioneCell.textContent = medico.specializzazione;
       
               const emailCell = document.createElement('td');
               emailCell.textContent = medico.email;
       
               const telefonoCell = document.createElement('td');
               telefonoCell.textContent = medico.telefono;
       
               // Aggiungi le celle alla riga
               row.appendChild(nomeCell);
               row.appendChild(cognomeCell);
               row.appendChild(specializzazioneCell);
               row.appendChild(emailCell);
               row.appendChild(telefonoCell);
       
               // Aggiungi la riga al corpo della tabella
               tableBody.appendChild(row);
           });
       })
       .catch(error => {
           console.error('Errore nel recuperare i dati dei medici:', error);
       });
 


