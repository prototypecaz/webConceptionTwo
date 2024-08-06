window.onload = function() {
    gsap.to(".separator", {duration: 0.7, scaleX: 1});
    gsap.to(".vertical-separator", {duration: 0.7, scaleY: 1});
    gsap.to(".ancre", {duration: 0.5, y: 0, stagger: 0.3,opacity:1,delay:0.2});
    gsap.to(".letter", {duration: 0.5, stagger: 0.03,opacity:1,delay:0.5});
    gsap.to(".title-letter", {duration: 0.5, stagger: 0.07,opacity:1,rotateX:0, x:0,delay:0.5});
    gsap.to(".subtitle", {duration: 0.5,opacity:1,y:0,delay:1.7});
    gsap.to(".numberYear", {duration: 0.6, stagger: 0.07,opacity:1,rotateX:0, x:0,delay:0.5});
    gsap.to(".social-links > span", {duration: 0.5,opacity:1,y:0,delay:1.7});
};