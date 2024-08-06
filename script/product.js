const categorias =  document.querySelectorAll('.categorias a');
categorias.forEach((cadaEnlace)=>{
    cadaEnlace.addEventListener('click',function(){
        categorias.forEach((categoria)=>{
            if(categoria.classList.contains('__focus'))categoria.classList.remove('__focus');
        })
        cadaEnlace.classList.add('__focus');
    })
})



const itemsSeccion = document.querySelectorAll('.item');
itemsSeccion.forEach((cadaItem,indice) =>{
    try {
        const tallas = itemsSeccion[indice].querySelectorAll('.tallas button');
        tallas.forEach((cadaTalla)=>{
            cadaTalla.addEventListener('click',function(){
                tallas.forEach((talla)=>{if(talla.classList.contains('select')) talla.classList.remove('select');})
                cadaTalla.classList.toggle('select');
            })
        })
        tallas[0].click();
    } catch (error) {
        console.log("Error",error);
    }
})

/**
 * Seleccionamos todos lo botones de agg al carrito
 * para que al clikarlos se abra la box modal que indica que se
 * ha agregado con exito al carro
 */
document.querySelectorAll('.secciones .item .addToCart').forEach((cadaBoton,indice)=>{
    cadaBoton.addEventListener('click',function(){
        document.getElementById('boxModal').classList.toggle('open');
        document.getElementById('closeModal').onclick=()=>{
            document.getElementById('boxModal').classList.toggle('open');
        }
        let nombreProducto, tallaProducto, valorProducto, codigoProducto, textoDescripcion, imgProducto;

        const itemProducto = document.querySelectorAll('.productos .item .item__description')[indice];
        const tallas = itemProducto.querySelectorAll('.talla');
        nombreProducto = itemProducto.querySelector('.nombre').textContent.toUpperCase();
        textoDescripcion = itemProducto.querySelector('.texto__descripcion').textContent.toUpperCase();
        valorProducto = itemProducto.querySelector('.valorProducto').textContent.toUpperCase();
        codigoProducto = itemProducto.querySelector('input').value.toUpperCase();
        imgProducto = document.querySelectorAll('.productos .item img')[indice].src;
        
        tallas.forEach(cadaTalla=>{
            if(cadaTalla.classList.contains('select'))tallaProducto = cadaTalla.textContent.toUpperCase();
        })

        const dataProduct = new Product(
            codigoProducto,
            tallaProducto,
            textoDescripcion,
            valorProducto,
            nombreProducto,
            1,
            imgProducto
        );

        dataProduct.sendApiGoogle(dataProduct);
        
    })
})
