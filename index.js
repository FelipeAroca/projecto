
let contenedorImagen=document.querySelectorAll(".contenedorImagen")
let detener=document.querySelector("#detener")
let play=document.querySelector("#play")
let velocidad=document.querySelector("#velocidad")
let retroceder=document.querySelector("#retroceder")


Array.prototype.forEach.call(contenedorImagen,elemento => {
    
    elemento.animate([
        {transform:"translateY(0)"},
        {transform:"translateY(-100%)"},
        {transform:"translateY(-200%)"},
        {transform:"translateY(-300%)"},
        {transform:"translateY(-400%)"},
    ],
    {
        iterations:Infinity,
        easing:"steps(4)",
        duration:5000,


    })
    //inicio

});
function animacionprometida(){
    // return new Promise((resolve,reject)=>{

        
        for (const elementoActivo of document.getAnimations()) {
                elementoActivo.pause()
                console.log(elementoActivo)
                // elementoActivo.finish()
                // elementoActivo.cancel()
        // setTimeout(()=>{            
            
            
            if(elementoActivo.playState=="paused"){

                let reusultadoTransform=window.getComputedStyle(elementoActivo.effect.target)
                    let informacionTransform=reusultadoTransform.getPropertyValue("transform")
                    let arrayValoreAnimacion=[]
                    arrayValoreAnimacion[0]=informacionTransform
                    
                    let nuevoArray=arrayValoreAnimacion[0].split(",")
                    let resultadoArray= nuevoArray[nuevoArray.length-1]
                    let segmento=600
                    const valor =resultadoArray.replace(/[\(\)-]/g,""); // Obtener el valor absoluto de -600
                    let resultadoValor=valor/segmento
                

                console.log(document.getAnimations()[resultadoValor].effect.target)









                // const currentTime = document.getAnimations()[resultadoValor].currentTime; // Obtiene el tiempo actual de la animación
                // const currentTime = elementoActivo.currentTime; // Obtiene el tiempo actual de la animación
                // const keyframes = elementoActivo.effect.getKeyframes(); // Obtiene los keyframes de la animación
                // const duracionKeyframe = 100 / keyframes.length; // Calcula la duración de cada keyframe en porcentaje
                
                // // Encuentra el índice del keyframe actual
                // let keyframeIndex = Math.floor(currentTime / duracionKeyframe);
                
                // // Asegúrate de que no nos pasemos del último keyframe
                // keyframeIndex = Math.min(keyframeIndex + 1, keyframes.length - 1);
                
                // // Establece el tiempo actual de la animación al comienzo del siguiente keyframe
                // elementoActivo.currentTime = keyframeIndex * duracionKeyframe;




                // const currentTime = elementoActivo.currentTime;
                // const numSegments = 5000 / 4;
        
                // // Encuentra el índice del segmento actual
                // let segmentIndex = Math.floor(currentTime / 4);
                
                // // Asegúrate de que no nos pasemos del penúltimo segmento
                // if (segmentIndex < numSegments - 2) {
                //     segmentIndex++;
                // }
                
                // elementoActivo.currentTime = segmentIndex * 4;
        
                // console.log(`Pausado en bloque del contenedor ${ contenedorActivoId}:`, segmentIndex + 1);
                const animacionActiva = document.getAnimations()[resultadoValor];
                elementoActivo.currentTime=0
                if(!animacionActiva){
                let totalDuration=5000
                const segmentDuration = totalDuration / 4;


                const currentTime = animacionActiva.currentTime;
                const keyframes = animacionActiva.effect.getKeyframes();
                const numSegments = keyframes.length;
                let segmentIndex = Math.floor((currentTime / totalDuration) * numSegments);
                elementoActivo.currentTime = segmentIndex * segmentDuration;
            }






            // if(elementoActivo.playState){
                const effect = elementoActivo.effect;
                const newDirection = effect.getComputedTiming().direction === 'normal' ? 'reverse' : 'normal';
                // elementoActivo.effect.updateTiming(
                //     { direction: newDirection }
                // )
                // const newKeyframes = [
                //         // { transform: 'translateY(0%)' },
                //         { transform: 'translateY(0%)' },
                //         { transform: 'translateY(-100%)' },
                //         { transform: 'translateY(-200%)' },
                //         { transform: 'translateY(-300%)' },
                //         { transform: 'translateY(-400%)' },
                        
                //     ];
    
                    // const newEffect = new KeyframeEffect(elementoActivo.effect.target, {
                    //         duration: elementoActivo.effect.getComputedTiming().duration,
                    //         // fill: elementoActivo.effect.getComputedTiming().fill,
                    //         iterations:1000,
                    //         direction: "reverse",
                    //         easing:elementoActivo.effect.getComputedTiming().easing,
                    // })
                // elementoActivo.effect.direction=newDirection
                elementoActivo.effect.updateTiming({direction:"reverse"})
                // elementoActivo.effect=newEffect    
                setTimeout(()=>{
                    elementoActivo.play()
                },3000)
                    //esto es comosi fuere un play()
                // resolve(elementoActivo)

           }
        // },1000)
        }   
        
    // })
}
retroceder.addEventListener("click", function(){
    Promise.all(document.getAnimations().map(animation =>animation.pause()))
    .then(()=>{
            animacionprometida();
        })
        
      });
    
    


        

detener.addEventListener("click",()=>{
    estadoAnimacion("pausar")
    Promise.all(document.getAnimations().map(animation => animation.finish))
    .then(()=>{
        console.log("elemento finalizado por completo")
    })
});
play.addEventListener("click",()=>{
    estadoAnimacion("avanzar")
    Promise.all(document.getAnimations().map(animation => animation.playState=="running"))
    .then(()=>{
        console.log("elemento esta funcioando el display")
    })


})
velocidad.addEventListener("click",()=>aumentarVelocidad())
function estadoAnimacion(AccionEstado){
    
    if(AccionEstado=="pausar"){
        document.getAnimations().forEach(element=>{
            console.log(element)
            if(element.effect.target.getAttribute("class")=="contenedorImagen")
            {
                element.pause()
                

                // element.ready.then(function() {
                //     console.log(element)
                //     // element.effect.updateTiming({ duration: 3000 });
                //     //  // Displays 'paused'
                //     // element.startTime =
                //     // document.timeline.currentTime - element.currentTime;
                    
                // });
                
            }
        })
    }
    else if(AccionEstado=="avanzar"){
        document.getAnimations().forEach(element=>{
            if(element.effect.target.getAttribute("class")==="contenedorImagen")
            {
                element.play()
                // Array.prototype.forEach.call(contenedorImagen,elemento => {
    
                //     elemento.animate([
                //         {transform:"translateY(0)"},
                //         {transform:"translateY(-100%)"},
                //         {transform:"translateY(-200%)"},
                //         {transform:"translateY(-300%)"},
                //         {transform:"translateY(-400%)"},
                //     ],
                //     {
                //         iterations:Infinity,
                //         easing:"steps(4)",
                //         duration:5000,
                
                
                //     })
                    
                
                // });
            }
        })
    }

}
function aumentarVelocidad(){
    document.getAnimations().forEach(element=>{
        
        // animation.playState

        element.playbackRate*=.5
        
    })
}