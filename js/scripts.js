

document.addEventListener('DOMContentLoaded', () => {

//obtener imagen
    const imagenHero = document.querySelector('.hero');

    //inicializar las variables
    let i = 0;
    let tiempo = 0;


    //arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];
    setInterval( () => {
        imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';
        
        if (tiempo > 40) {
            tiempo = 0;

            imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";
            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }
            console.log(imagenes[i]);
        }
        tiempo ++;
    }, 100);




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

