document.addEventListener('DOMContentLoaded', function () {

  ////////////////////
  // INTRO SEQUENCE //
  ////////////////////

  const introSequence = new gsap.timeline();

  // Blinking cursor animation
  introSequence.fromTo(".cursor", 1, {
    x: 0,
    y: -20,
    "border-bottom-color": "rgba(0,200,20,0.75)"
  }, {
    "border-bottom-color": "rgba(0,140,15,0)",
    repeat: -1,
    ease: SteppedEase.config(35)
  }, 0);

  // Website intro text
  introSequence.to(".intro__firstLine", {
    text: {
      value: "30% of New Zealand teens experience online bullying everyday.<br />"
    },
    duration: 3,
    delay: 0,
    ease: "none"
  })
    .to(".intro__secondLine", {
      text: {
        value: "This is what it looks like."
      },
      duration: 2,
      delay: 0.75,
      ease: "none"
    })

  /* -------------------- */

  ///////////////////////
  // COMMENTS SEQUENCE //
  ///////////////////////

  /* Text fade in */
  let commentsSequence = document.querySelectorAll(".comments p");
  commentsSequence.forEach((item, index) => {
    let commentAnim = new SplitType(item, {
      types: "chars",
      // lineClass: "split-child"
    });
    let commentLine = new SplitType(item, {
      lineClass: "paragraph-line"
    });
    let commentLines = gsap.utils.toArray(commentLine.lines);

    gsap.timeline({
      defaults: {
        // paused: true,
        delay: 0.5,
        duration: 0.3,
        stagger: {
          amount: 0.5
        }
      },
    })
      .from(commentLines, {
        duration: 1.5,
        opacity: 0,
        ease: "ease-out",
        stagger: 0.15,
        onComplete: revertText
      })

    function revertText() {
      // console.log(item);
      SplitType.revert(item)
    }
  })

  ///////////////////
  // START BUTTON //
  //////////////////

  /*

    This section deals with the "Get Started" button that, when pressed, hides the intro sequence and starts the comment one, alongside a "Restart" button resetting both sequences.

  */

  const introSection = document.querySelector(".typewriter");
  const commentSection = document.querySelector(".comments");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    if (!button.classList.contains("opened")) {
      // item.play(0); // plays comment timelines from the beginning
      button.classList.toggle("opened");
      introSection.classList.add("hidden"); // hides the intro sequence
      commentSection.classList.remove("hidden"); // unhides comment sequence
      button.innerHTML = "Restart"; // changes button text

    } else {
      // commentsSequence.pause(); // pauses comment sequence
      introSequence.play(0); // plays intro sequence from the beginning
      button.classList.toggle("opened");
      introSection.classList.remove("hidden"); // unhides the intro sequence
      commentSection.classList.add("hidden"); // hides comment sequence
      button.innerHTML = "Get Started"; // reverts button text
    }
  });


})