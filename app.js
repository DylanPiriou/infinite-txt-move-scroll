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
    if (xPercent <= -100) {
        xPercent = 0;
    }
    if (xPercent > 0) {
        xPercent = -100;
    }
    gsap.set(firstTxt, { xPercent: xPercent })
    gsap.set(secondText, { xPercent: xPercent })
    xPercent += 0.2 * direction;
    requestAnimationFrame(animation)
};
requestAnimationFrame(animation);

const main = document.querySelector("main")
gsap.registerPlugin(ScrollTrigger);
gsap.to(slider, {
    scrollTrigger: {
        trigger: main,
        start: 0,
        end: "bottom",
        scrub: true,
        onUpdate: e => direction = e.direction * -1
    },
    x: "-=300px"
})

const star = document.querySelector(".star")
const body = document.querySelector("body")
gsap.from(star, {
    scrollTrigger: {
        trigger: body,
        start: "top",
        end: "bottom",
        scrub: true
    },
    rotate: "+=360deg"
})

const img = document.querySelector(".bg")
const header = document.querySelector("header")
gsap.from(img, {
    scrollTrigger: {
        trigger: header,
        start: "top",
        end: "bottom 40%",
        scrub: true,
        pin: true
    },
    clipPath: `inset(15%)`
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
        start: "top 90%",
        end: "bottom 90%",
        scrub: .1
    },
    x: 0,
    stagger: 0.2
})

const skills = document.querySelectorAll(".skiller-container")
gsap.from(skills, {
    scrollTrigger: {
        trigger: linesContainer,
        start: "top 70%",
        end: "bottom 90%",
        scrub: true
    },
    x: -50,
    autoAlpha: 0,
    stagger: 0.2
})
// const projectContainer = document.querySelector(".projects")
// const projectSlider = document.querySelector(".projects__slider")
// const images = document.querySelectorAll(".img__project")

// gsap.to(projectSlider, {
//     scrollTrigger: {
//         trigger: projectContainer,
//         start: "top",
//         end: "bottom",
//         pin: true
//     }
// })

// const square = document.createElement("div");
// square.classList.add("square");
// images[0].appendChild(square)

// images.forEach(img => {
//     gsap.to(square, {
//         scrollTrigger: {
//             trigger: projectContainer,
//             start: "enter",
//             scrub: true
//         },
//         x: `+${projectSlider.getBoundingClientRect().width - square.getBoundingClientRect().width}`
//     });
// })