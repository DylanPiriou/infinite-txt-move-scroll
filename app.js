// SMOOTH SCROLL LENIS
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const firstTxt = document.querySelector(".first")
const secondText = document.querySelector(".second")
const slider = document.querySelector(".slider")
let xPercent = 0;
let direction = -1;

const animation = () => {
    if(xPercent <= -100){
        xPercent = 0;
    }
    if(xPercent > 0){
        xPercent = -100;
    }
    gsap.set(firstTxt, {xPercent: xPercent})
    gsap.set(secondText, {xPercent: xPercent})
    xPercent += 0.2 * direction;
    requestAnimationFrame(animation)
};
requestAnimationFrame(animation);

gsap.registerPlugin(ScrollTrigger);
gsap.to(slider, {
    scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: e => direction = e.direction * -1
    },
    x: "-=300px"
})

const borderFooter = document.querySelector(".ligne-arrondie")
const footer = document.querySelector("footer")
gsap.to(borderFooter, {
    scrollTrigger: {
        trigger: footer,
        start: "top 40%",
        end: window.innerHeight / 2,
        scrub: true,
    },
    width: "150%"
})


const lines = document.querySelectorAll(".line")
const linesContainer = document.querySelector(".lines__container")
gsap.to(lines, {
    scrollTrigger: {
        trigger: linesContainer,
        start: "top 70%",
        end: "bottom 80%",
        scrub: true
    },
    x: 0,
    stagger: 0.1
})
