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

  const comment1__tl = gsap.timeline({ paused: true })
  const comment2__tl = gsap.timeline({ paused: true })
  const comment3__tl = gsap.timeline({ paused: true })
  const comment4__tl = gsap.timeline({ paused: true })
  const comment5__tl = gsap.timeline({ paused: true })

  comment1 = new SplitType(".comment1", {})
  comment2 = new SplitType(".comment2", {})
  comment3 = new SplitType(".comment3", {})
  comment4 = new SplitType(".comment4", {})
  comment5 = new SplitType(".comment5", {})

  // Words for emphasis
  emphasis = new SplitType(".emphasis", {})

  // This all needs to be cleaned up to be programmatic instead of using so much bloody code

  // Comment 1 timeline
  comment1__tl.from(comment1.chars, {
    delay: 0.5,
    opacity: 0,
    duration: 0.3,
    stagger: {
      amount: 0.5
    }
  })
    .from(emphasis.chars, {
      delay: 0.5,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5
      },
      x: Math.random() * 650 - 100,
      y: Math.random() * 350 - 100,
    })

  // comment1__tl.to(comment1.chars, {
  //   opacity: 0,
  //   delay: 12,
  //   stagger: {
  //     amount: 0.5
  //   }
  // });

  // Comment 2 timeline
  comment2__tl.from(comment2.chars, {
    delay: 3,
    opacity: 0,
    duration: 0.3,
    stagger: {
      amount: 0.5
    }
  });

  // Comment 3 timeline
  comment3__tl.from(comment3.chars, {
    delay: 6,
    opacity: 0,
    duration: 0.3,
    stagger: {
      amount: 0.5
    }
  });
  // Comment 4 timeline
  comment4__tl.from(comment4.chars, {
    delay: 9,
    opacity: 0,
    duration: 0.3,
    stagger: {
      amount: 0.5
    }
  });

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
      comment1__tl.play(0); // plays comment timelines from the beginning
      comment2__tl.play(0);
      comment3__tl.play(0);
      comment4__tl.play(0);
      button.classList.toggle("opened");
      introSection.classList.add("hidden"); // hides the intro sequence
      commentSection.classList.remove("hidden"); // unhides comment sequence
      button.innerHTML = "Restart"; // changes button text

    } else {
      comment1__tl.pause(); // pauses comment sequence
      comment2__tl.pause();
      comment3__tl.pause();
      comment4__tl.pause();
      introSequence.play(0); // plays intro sequence from the beginning
      button.classList.toggle("opened");
      introSection.classList.remove("hidden"); // unhides the intro sequence
      commentSection.classList.add("hidden"); // hides comment sequence
      button.innerHTML = "Get Started"; // reverts button text
    }
  });


})