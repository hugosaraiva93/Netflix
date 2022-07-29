$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function maisinformacoes() {
    var pontos=document.getElementById("pontos");
    var maistexto=document.getElementById("mais");
    var btnmaisinfo=document.getElementById("btnmaisinfo");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maistexto.style.display="none";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
    }
}