const timeline = gsap.timeline(),
    firstLine = new SplitType(".firstLine", { types: 'words, chars', absolute: "true" })
    secondLine = new SplitType(".secondLine", { absolute: 'true' })
    dying = new SplitType(".dying", {types: 'chars', absolute: 'true'})

// Animate characters into view with a stagger effect
gsap.from(firstLine.words, {
    opacity: 0,
    x: Math.random() * 650 - 100,
    y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
    ease: Quad.easeIn,
    fontSize: '+=50',
});

gsap.from(secondLine.chars, {
    opacity: 0,
    //: Math.random() * 650 - 100,
    y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
    ease: Quad.easeIn,
    fontSize: '+=50',
    delay: 2
});

gsap.from(dying.chars, {
    opacity: 0,
    //x: Math.random() * 650 - 100,
    y: Math.random() * 350 - 100,
    duration: 0.5,
    stagger: { amount: 0.75 },
    ease: Quad.easeIn,
    delay: 4
});



document.getElementById("reset").onclick = function () {
    timeline.restart();
};