

function generarListadoCompras(){
    const contendorCompras = document.getElementById('contenedorCompras');
    const listadoCompra = [];
    for (let index = 0; index < localStorage.length; index++) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(index)));
        listadoCompra.push(data);
    }
    listadoCompra.forEach(cadaCompra=>{
        try {
            const itemCompra = document.createElement('div');
            const imgProducto = document.createElement('img');
            const descripcion = document.createElement('div');
            const botonQuitar = document.createElement('button');
            const imagenQuitar = document.createElement('img');
    
            const nombreProducto = document.createElement('div');
            const precioProducto = document.createElement('div');
            const textoDescripcion = document.createElement('div');
            const cantidadProducto = document.createElement('div');
    
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            const span4 = document.createElement('span');
    
            //Asignando las clases
            itemCompra.className = 'item__compras';
            descripcion.className = 'descripcion';
            nombreProducto.className='nombreProducto';
            precioProducto.className='precioProducto';
            textoDescripcion.className='textoDescripcion';
            cantidadProducto.className='cantidadProducto';
    
            imgProducto.src = cadaCompra.imgProducto;
            nombreProducto.innerHTML = cadaCompra.nombreProducto;
            span1.innerHTML = "Precio";
            span2.innerHTML = cadaCompra.precio;
            precioProducto.append(span1,span2);
            textoDescripcion.innerHTML = cadaCompra.descripcion;
            span3.innerHTML = "Cantidad";
            span4.innerHTML = cadaCompra.catidad;
            cantidadProducto.append(span3,span4);
            imagenQuitar.src="../img/icon/x.svg";
            imgProducto.alt='Producto';
            imagenQuitar.alt='quitar';
            botonQuitar.append(imagenQuitar);
            botonQuitar.type='button';
            botonQuitar.title = 'Quitar elemento';
            botonQuitar.className = 'btnQuitar';
    
            descripcion.append(
                nombreProducto,
                precioProducto,
                textoDescripcion,
                cantidadProducto
            );
            itemCompra.append(
                imgProducto,
                descripcion,
                botonQuitar
            );
            contendorCompras.appendChild(itemCompra);
        } catch (error) {
            console.info('Posible error',error);
        }
    })
}
window.addEventListener('DOMContentLoaded',()=>{
    generarListadoCompras();
    document.querySelectorAll('.item__compras .btnQuitar').forEach(function(cadaBoton){
        cadaBoton.addEventListener('click',function(){
            const item = this.closest('.item__compras');
            if(item) item.remove();
        })
    })
});