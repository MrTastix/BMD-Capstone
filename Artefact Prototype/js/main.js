

let tl = new TimelineMax({});

// letter animation
tl.to(".intro-text", {
  text: {
    value: "40% of teenagers experience online bullying everyday.<br />Pick your poison."
  },
  duration: 3,
  delay: 0,
  ease: "none"
})

// blinking cursor animation
tl.fromTo("#cursor", 1, {
  x: -25,
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(37)
}, 0);

document.querySelector('#restart').onclick = () => tl.restart()
document.querySelector('#pause').onclick = () => tl.pause()
document.querySelector('#resume').onclick = () => tl.resume()