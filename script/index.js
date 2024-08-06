document.getElementById('menu__hamburguesa').addEventListener('click',function(){
    this.classList.toggle('__active');
    document.getElementById('nav').classList.toggle('__active');
});

const dataBanner = [

    {
        text:"¡Atención a todos los entusiastas del deporte y la comodidad! Presentamos nuestro nuevo Buzo Deportivo UltraFit, diseñado para ofrecerte el máximo confort y rendimiento en todas tus actividade",
        img:"img/product/item2.png",
        title:"Promo del día"
    },
    {
        text:"¡Atención a todos los entusiastas del deporte y la comodidad! Presentamos nuestro nuevo Buzo Deportivo UltraFit, diseñado para ofrecerte el máximo confort y rendimiento en todas tus actividade",
        img:"img/product/item2.png",
        title:"Promo del día"
    },
    {
        text:"¡Atención a todos los entusiastas del deporte y la comodidad! Presentamos nuestro nuevo Buzo Deportivo UltraFit, diseñado para ofrecerte el máximo confort y rendimiento en todas tus actividade",
        img:"img/product/item2.png",
        title:"Promo del día"
    },
    {
        text:"¡Atención a todos los entusiastas del deporte y la comodidad! Presentamos nuestro nuevo Buzo Deportivo UltraFit, diseñado para ofrecerte el máximo confort y rendimiento en todas tus actividade",
        img:"img/product/item2.png",
        title:"Promo del día"
    },
    {
        text:"¡Atención a todos los entusiastas del deporte y la comodidad! Presentamos nuestro nuevo Buzo Deportivo UltraFit, diseñado para ofrecerte el máximo confort y rendimiento en todas tus actividade",
        img:"img/product/item2.png",
        title:"Promo del día"
    },
    
];

let indice = 0;
let slideInterval;
let autoSlideTimeout; 
const intervaloTiempo = 4000;

const botonDerecha = document.getElementById('buttonRigth');
botonDerecha.addEventListener('click',function(e){
    nextImg();
    // reset();
});
botonDerecha.click();
const botonIzquierda = document.getElementById('buttonLeft');
botonIzquierda.addEventListener('click',function(e){
    preImg();
    reset();
});
function loadImg(indice) {
    try {
        const data = dataBanner[indice];
        const texto = document.getElementById('bannerText');
        texto.innerHTML = `
             <div class="banner__text">
                <h3>${data.title}</h3>
                <p>
                    ${data.text}
                </p>
            </div>
        `;
        const contenedor = document.getElementById('bannerContent');
        contenedor.innerHTML = `
            <img src="${data.img}" alt="img" class="img">
            <a href="#" class="enlace__promocion"><span>Ver promoción</span></a>
        `;
    } catch (error) {
        console.log("Error --> ",data);
    }
}

/**
 * Funciones para que las imagenes 
 * se deslizen automaticamente pero al clikear el boton
 * previous o next se  detienen por un cierto tiempo
 * para que el usuario las dezlice libremente.
 */
function nextImg() {
    reset();
    if(indice >= dataBanner.length) indice = 0;
    loadImg(indice);
    indice++;
}

function reset() {
    clearInterval(slideInterval);
    clearInterval(autoSlideTimeout);
    autoSlideTimeout = setInterval(nextImg,intervaloTiempo);
}
function preImg() {
    indice--;
    if(indice < 0) indice = dataBanner.length - 1;
    loadImg(indice);
}

slideInterval =  setInterval(nextImg,intervaloTiempo);