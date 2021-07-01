

/*Libreria gsap
  var tween = gsap.to(".green", {
    duration: 4, 
    x: 750, 
    rotation: 360, 
    ease: "none", 
    paused: true
  });
  
  // click handlers for controlling the tween instance...
  document.querySelector("#play").onclick = () => tween.play();
  document.querySelector("#pause").onclick = () => tween.pause();
  document.querySelector("#resume").onclick = () => tween.resume();
  document.querySelector("#reverse").onclick = () => tween.reverse();
  document.querySelector("#restart").onclick = () => tween.restart();
  
  Resources
*/

/* Escritura automatica */

/*
  const app = document.getElementById('typewriter');

const typewriter = new  Typewriter(app, {
    loop: true,
    delay:75
});


typewriter
 .typeString('Desarrollador Web')
 .pauseFor(200)
 .deleteAll()
 .typeString('Desarrollo front-end')
 .pauseFor(200)
 .deleteAll()
 .typeString('Desarrollador de Software')
 .pauseFor(200)
 .deleteAll()
 .start();    
 */

/* Efecto al scrollear */


 window.sr = ScrollReveal();

    sr.reveal('#titulo',{
        duration: 2000,
        origin: 'bottom',
        distance: '-400px'
        
        
    });

    sr.reveal('.col',{
        duration: 2000,
        origin: 'left',
        distance: '400px',
        delay: 300
        
        
    });

    sr.reveal('.titulo-proy',{
      duration: 2000,
      origin: 'top',
      distance: '400px',
      delay: 300
      
      
  });

 
