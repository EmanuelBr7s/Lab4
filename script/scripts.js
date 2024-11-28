document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let motivo = document.getElementById('motivo').value;
    let email = document.getElementById('email').value;

    if (nombre === '' || motivo === '' || email === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Formulario enviado correctamente!');
        // Aquí puedes agregar más lógica para enviar el formulario si es necesario
        document.getElementById('contactForm').reset(); // Limpiar el formulario
    }
});
