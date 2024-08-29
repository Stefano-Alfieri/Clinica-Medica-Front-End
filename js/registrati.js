async function registrati(){
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;
    try {
        const response = await fetch('http://localhost:8080/pazienti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cognome,email,nome, password, telefono })
        });
    }catch (error) {
    console.error('Error during login:', error);
}
}



//row.innerHTML = '<input type="button" onclick="prenota("' + disponibilita.id + ')"/>';