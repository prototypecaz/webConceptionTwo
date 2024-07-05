function initAnimations() {
    let offsetWidth = document.querySelector('.containerPresentationSociety').offsetWidth;
    let windowInnerWidth = window.innerWidth;


      let lastScrollY = 0;
    // Animation pour le premier bloc
    /*let scrollTween = gsap.to('.containerPresentationSociety', {
      xPercent: -100,
      ease: 'linear',
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: () => '+=' + (offsetWidth - windowInnerWidth),
        scrub: 2,
        pin: true,
      },
    });

    const t0 = gsap.timeline({
        scrollTrigger: {
          trigger: '.containerPresentationSociety',
          start: 'left left',
          end: '+=100%',
          scrub: 2,
          containerAnimation: scrollTween,
        },
      });

    t0.to('.titrePresentation', {
        xPercent: -30,
    });*/

      // Déplacer le containerPresentationSociety
      const container = document.querySelector('.containerPresentationSociety');
      const moveDistance = container.offsetWidth - window.innerWidth;

      const rightBlocHistoire = document.querySelector('.rightBlocHistoire');
      const moveDistanceBlocHistoire = rightBlocHistoire.offsetHeight - window.innerHeight;

      const imgTree = document.querySelector('.scene')

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: () => offsetWidth + windowInnerWidth + moveDistanceBlocHistoire + 5000  , // Ajustez cette valeur selon la durée souhaitée de l'animation
        scrub: 2,
        pin: true,

      }
    });

    // Ajoutez l'animation de clipPath à la timeline
    timeline.to('.circlePresentation', {
      clipPath: 'circle(100%)',
      ease: 'linear',
    });

    gsap.utils.toArray('.letterPresentation').forEach((letter, i) => {
      timeline.fromTo(letter,
        {
          y: -500,
          rotation: Math.random() * 360,
          x: Math.random() * 200 - 100,
        },
        {
          y: 0,
          rotation: 0,
          x: 0,
          duration: 0.3,
          ease: 'bounce.out',
          delay:Math.random() * 0.4,
          markers:true
        },
        0
      );
    });



  timeline.to('.containerPresentationSociety', {
    x: -moveDistance, // Déplacer le container de manière à ce que son bord droit touche le bord droit de la fenêtre
    ease: 'linear',
  },0.6);


  timeline.to('.titrePresentation', {
    xPercent: -36,
},0.6);





const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  // Obtenir la transformation actuelle
  const transform = window.getComputedStyle(project).getPropertyValue('transform');

  // Extraire la valeur de rotation
  let initialRotate = 0;
  if (transform !== 'none') {
    const values = transform.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    initialRotate = Math.round(Math.atan2(b, a) * (180 / Math.PI)); // Convertir en degrés
  }

  timeline.fromTo(project, {
    rotate: initialRotate - 55,
    y: -1000,
  }, {
    y: 0,
    rotate: initialRotate,
    ease: "linear",
    duration: 0.15
  });
});



timeline.to('.titleProject', {
  yPercent: 40,
},0.6);

timeline.to('.blocProject', {
  rotation: 0, // Durée de l'animation pour chaque élément
  stagger: 0 // Décalage entre le démarrage de chaque animation
},1);

timeline.to('.circlePresentation2', {
  clipPath: 'circle(100%)',
  ease: 'linear',
});


let lastYPercent = 0;
let lastImageIndex = 1;
const totalImages = 150;

timeline.to('.rightBlocHistoire', {
  y: -moveDistanceBlocHistoire,
  ease: 'linear',
  onUpdate: function() {
    const progress = this.progress();

    // Calculez l'index de l'image basé sur le pourcentage de progression
    let newImageIndex = Math.floor(progress * totalImages) + 1;
    newImageIndex = Math.max(1, Math.min(newImageIndex, totalImages));

    // Changez la visibilité des images seulement si l'index a changé pour éviter des changements inutiles
    if (newImageIndex !== lastImageIndex) {

      document.getElementById(`img-${newImageIndex}`).style.display = 'block';
      document.getElementById(`img-${lastImageIndex}`).style.display = 'none';
      lastImageIndex = newImageIndex;
    }

    const yPercent = -(progress * 80); // Change yPercent from -0% to -80%

    // Changez .anneeSolo seulement si yPercent a changé pour éviter des changements inutiles
    if (yPercent !== lastYPercent) {
      requestAnimationFrame(() => {
        gsap.set('.anneeSolo', { yPercent: yPercent });
      });
      lastYPercent = yPercent;
    }
  }
});










    // Ajoutez l'animation de déplacement du container sur l'axe X
   /* timeline.to('.containerPresentationSociety', {
      xPercent: -100, // Ajustez cette valeur pour définir la distance de déplacement

      ease: 'linear',
    });
*/



}

document.addEventListener('DOMContentLoaded', function() {initAnimations();})
