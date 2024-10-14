// Puedes agregar aquí cualquier código JavaScript que desees para hacer la página interactiva.
// Por ejemplo, podrías agregar alguna animación o lógica para manejar el contenido.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada completamente');
    // Aquí podrías agregar más lógica para manipular el DOM si es necesario.
    const footerImage = document.getElementById('footer-image');
    footerImage.style.width = '400px';
    footerImage.style.marginTop = '100px';

    const heading = document.querySelector('#content h1');
    heading.style.fontSize = '4em';

    const paragraphs = document.querySelectorAll('#content p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = '2.4em';
        paragraph.style.marginTop = '50px';
    });
});