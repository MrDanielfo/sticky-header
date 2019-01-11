const header = document.querySelector('.encabezado');
const listado = document.querySelector('.listado');
const imagen = document.querySelector('.tierra-virgen');

const btnMenu = document.querySelector('#icono-barras');

eventListeners()

function eventListeners() {

    document.addEventListener('scroll', reduccion)
    // El evento scroll se debe aplicar al documento en general 
    window.addEventListener('resize', menuResponsivo)
    let contador = 0;

    btnMenu.addEventListener('click', function(){
        contador++;
        if(contador == 1) {
            btnMenu.className = "fas fa-times"
            btnMenu.classList.remove('fas.fa-bars')
            listado.style.opacity = 1;
            listado.style.marginTop = '-10px';
    
        } else {
            btnMenu.className = 'fas fa-bars';
            btnMenu.classList.remove('fas.fa-times');
            listado.style.marginTop = '20px';
            listado.style.opacity = 0;
            contador = 0; 
        }
        
    });
}

function reduccion() {
    const scrollVertical = window.scrollY;
    //console.log(scrollVertical)
    if(scrollVertical >= 330 && window.innerWidth > 768 ) {
        header.className = 'adicional'
        header.classList.remove('encabezado');
        listado.className = "alternativo"
        listado.classList.remove('listado')
        imagen.className = 'small-bar'
        imagen.classList.remove('.tierra-virgen');
    } else {
        header.className = 'encabezado';
        header.classList.remove('adicional')
        listado.className = 'listado';
        listado.classList.remove('alternativo');
        imagen.className = 'tierra-virgen';
        imagen.classList.remove('.small-bar');
    }
    
}

function menuResponsivo() {

    const limite = 768;
    const anchoPantalla = window.innerWidth;
    
    if(anchoPantalla <= limite) {

        header.className = 'encabezado';
        header.classList.remove('adicional');  
    } else {
        
    }

}


