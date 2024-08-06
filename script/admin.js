document.querySelectorAll('.nav .links__nav').forEach((cadaLi)=>{
    cadaLi.addEventListener('click',function(e){
        e.preventDefault();
        const itemNav = cadaLi.querySelector('.items__nav');
        itemNav.classList.toggle('visible');
        cadaLi.classList.toggle('normal');
    })
   
})
document.getElementById('hamburguesa').onclick=function(){
    this.classList.toggle('active')
    document.getElementById('header').classList.toggle('open');
    document.getElementById('main').classList.toggle('open');
};

document.getElementById('profile__header').addEventListener('click',function(){
    this.classList.toggle('open');
    document.getElementById('profile__body').classList.toggle('open');
})


var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio'],
        datasets: [{
            label: ['Grafica de ventas'],
            data: [12000, 19000, 3000, 5000, 2000, 30000,60000],
            borderColor: '#ccc5b9ff',
            backgroundColor: '#eb5e28ff',
        }]
    }
});