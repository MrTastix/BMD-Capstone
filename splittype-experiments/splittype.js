const tl = gsap.timeline(),
    firstLine = new SplitType(".firstLine", { types: 'words, chars' })
    secondLine = new SplitType(".secondLine", { types: 'words, chars' })
    dying = new SplitType(".dying", {types: 'chars' })

// Animate characters into view with a stagger effect


tl.from(firstLine.words, {
    opacity: 0,
    x: Math.random() * 650 - 100,
    //y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
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
    //x: Math.random() * 650 - 100,
    y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
})


document.getElementById("reset").onclick = function () {
    tl.restart();
};