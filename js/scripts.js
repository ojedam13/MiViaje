

document.addEventListener('DOMContentLoaded', () => {

//boton flotante footer
    
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        //prevenimos default pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');

        if (footer.classList.contains('activo')) {
            //si lo tiene, ejecuta este codigo
            footer.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
            btnFlotante.classList.remove('activo');
        } else {
            //sino lo tiene, ejecuta este codigo
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = ' X Cerrar';
        }

    })
})
