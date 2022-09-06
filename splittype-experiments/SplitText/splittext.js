let tl = gsap.timeline(),
  firstLine = new SplitText(".firstline", { type: "words, lines, chars" });
  secondLine = new SplitText(".secondline", { type: "words, lines, chars" });
  dying = new SplitText(".dying", { type: "words, lines, chars", position:"absolute" });

lineOne = firstLine.words;
lineTwo = secondLine.words;
dying = dying.chars;

tl.staggerFrom(lineOne, 0.8, { opacity: 0, x: 80, ease: Cubic.easeOut }, 0.05);

tl.staggerFrom(lineTwo, 0.4, { opacity: 0, x: 80, ease: Cubic.easeOut }, 0.1);

tl.staggerFrom(dying, 0.3, { opacity: 0, y: 80, ease: Cubic.easeOut}, 0.1);

document.getElementById("animate").onclick = function () {
  tl.restart();
};
