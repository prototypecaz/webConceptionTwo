let ancres = document.querySelectorAll('.titleCard');

ancres.forEach((ancre)=>{
    ancre.onclick = function(e){
        e.preventDefault();
        gsap.to('#canvas', {clipPath: 'circle(80%)',stagger:0.15,duration:0.3})
        setTimeout(()=>{
            window.location.href="./project.html"
        },900)
    }
})

