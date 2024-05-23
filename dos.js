let contenedorImagen=document.querySelectorAll(".contenedorImagen")
let contenedorDirecciones=document.querySelector(".contenedorDirecciones")

Array.prototype.forEach.call(contenedorImagen,elemento => {
    
    elemento.animate([
        {transform:"translateY(0)"},
        {transform:"translateY-100%)"},
        {transform:"translateY(-200%)"},
        {transform:"translateY(-300%)"},
        {transform:"translateY(-400%)"},
    ],
    {
        iterations:Infinity,
        easing:"steps(4)",
        duration:10000,


    })
    

});

function accionLado(){
    const duracionTotal = 10000;
    const numEtapas = 4;
    const duracionXEtapa = duracionTotal / numEtapas;
    for( animacion of document.getAnimations()){
        
        let imagen=window.getComputedStyle(animacion.effect.target)
        let  resulatadoImagen=imagen.getPropertyValue("transform")
        let arraNuevo=[]
        arraNuevo[0]=resulatadoImagen
        let  resultadoArray=arraNuevo[0].split(",")
        let resultadoSubarray=resultadoArray[resultadoArray.length-1]
        let indiceEelemento=resultadoSubarray.replace(/[\(\)-]/g,"") // validando 
        let operacion=600*indiceEelemento
        let  resultdoIndice=indiceEelemento/600
        resultdoIndice=resultdoIndice+1
        effect=animacion.effect
        let resultadoEffect=effect.getComputedTiming().direction=="normal"?"reverse":"normal"
        animacion.effect.updateTiming({direction:resultadoEffect})
        
    }
}
contenedorDirecciones.addEventListener("click",function(e){
    if(e.target.classList.contains("fa-left-long")  || e.target.classList.contains("fa-right-long")){
        accionLado()
    }
    

    
})