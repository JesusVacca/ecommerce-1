
class Product{
    constructor(productID,talla,descripcion,precio,nombreProducto,catidad,imgProducto){
        this.productID = productID;
        this.talla = talla;
        this.descripcion = descripcion;
        this.precio = precio;
        this.nombreProducto = nombreProducto;
        this.catidad = catidad;
        this.imgProducto = imgProducto;
    }

    sendApiGoogle(product){
        if(this.estaAgregado(product.productID)){
            document.getElementById('textModal').innerHTML = "Ya has agregado este producto al carrito";
            return;
        }else{
            localStorage.setItem(product.productID,JSON.stringify(product));
            document.getElementById('textModal').innerHTML = "Producto agregado con exito.";
        }
        
    }
    estaAgregado(productID){
        const data = JSON.parse(localStorage.getItem(productID));
        return (data != null) ? true : false;
    }
}