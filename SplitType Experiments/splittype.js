const tl = gsap.timeline(),
    firstLine = new SplitType(".firstLine", { types: 'words, chars', absolute: "true" })
    secondLine = new SplitType(".secondLine", { types: 'words, chars', absolute: "true" })
    dying = new SplitType(".dying", {types: 'chars', absolute: "true" })

// Animate characters into view with a stagger effect


tl.from(firstLine.chars, {
    opacity: 0,
    x: Math.random() * 650 - 100,
    //y: Math.random() * 350 - 100,
    duration: 0.25,
    stagger: { amount: 0.5 },
    ease: Quad.easeIn
})

.from(secondLine.chars, {
    opacity: 0,
    x: Math.random() * 650 - 100,
    //y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
    ease: Quad.easeIn
})

.from(dying.chars, {
    opacity: 0,
    y: -100,
    duration: 0.5,
    stagger: { amount: 0.75 },
})


document.getElementById("reset").onclick = function () {
    tl.restart();
};