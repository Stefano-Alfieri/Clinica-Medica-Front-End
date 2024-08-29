async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (response.status === 200) {
            const data = await response.json();
            const token = data.token;
            const ruolo = token.ruolo;
            console.log(ruolo);        
            localStorage.setItem('authToken', token.token);           
            if(ruolo==="admin"){
                window.location.href="./AdminClinica/adminClinica/index.html"
            }else{
                window.location.href="./home.html"

            }
        } 
    } catch (error) {
        console.error('Error during login:', error);
    }
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