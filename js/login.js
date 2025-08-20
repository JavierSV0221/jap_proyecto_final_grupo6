//Llama al botón
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
    const username = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
//Simulación de credenciales
    if (username != "vero" && password != "vero123") {
        alert("Credenciales incorrectas");
        return;
    }
//Guarda los datos en localStorage
    localStorage.setItem("session",{});

//Redirecciona a index.html
    window.location.href = "index.html";
});

