// Intro typewriter
let typewriter = new gsap.timeline();

typewriter.to(".intro__firstLine", {
  text: {
    value: "Roughly 30% of teenagers experience online bullying everyday. <br />This is how it feels."
  },
  duration: 4,
  delay: 0,
  ease: "none"
})

// blinking cursor animation
typewriter.fromTo(".cursor", 1, {
  x: 0,
  y: -20,
  "border-bottom-color": "rgba(0,200,20,0.75)"
}, {
  "border-bottom-color": "rgba(0,140,15,0)",
  repeat: -1,
  ease: SteppedEase.config(35)
}, 0);


/* Creating a gsap timeline for SplitType functions */
const splittype = gsap.timeline({
  }),
  mySplitText = new SplitType(".typeComments", {
    types: 'words, lines, chars'
  })
chars = mySplitText.chars;

// Animate characters into view with a stagger effect

splittype.from(chars, {
  opacity: 0,
  duration: 0.2,
  stagger: {
    amount: 0.75
  },
})

document.getElementById("start").onclick = function () {
  typewriterIntro.restart();
  splittype.restart();
}