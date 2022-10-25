document.addEventListener('DOMContentLoaded', function () {

  /////////////////////
  // CORE VARIABLES //
  ////////////////////

  let introSection = document.querySelector("#intro");
  let warningSection = document.querySelector("#warning");
  let infoSection = document.querySelector("#info");
  let commentsSection = document.querySelector("#comments");

  ////////////////////
  // INTRO SEQUENCE //
  ////////////////////

  let introSequence = new gsap.timeline();

  // Blinking cursor animation
  introSequence.fromTo(".cursor", 1, {
    x: 0,
    y: -20,
    "border-bottom-color": "rgba(144,198,243,0.75)"
  }, {
    "border-bottom-color": "rgba(33,140,230,0)",
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
        value: "This is what it feels like."
      },
      duration: 2,
      delay: 0.75,
      ease: "none"
    })

  ////////////////////////////
  // SECTION TRANSISITIONS //
  ///////////////////////////

  // Warning section transistion
  const warningSequence = new gsap.timeline();
  const infoSequence = new gsap.timeline();

  warningSequence.fromTo("#warning", {
    paused: true,
    opacity: 0,
  }, {
    opacity: 1,
    duration: 2,
    delay: 0.5,
    ease: "power2.in"
  });

  infoSequence.fromTo("#info", {
    paused: true,
    opacity: 0,
  }, {
    opacity: 1,
    duration: 3,
    delay: 3,
    ease: "power2.in"
  });

  ///////////////////////
  // COMMENTS SEQUENCE //
  ///////////////////////

  // Array of all the toxic messages to be sent
  const toxicMsgs = [
    "Man you're so fucking <b>stupid</b>",
    "Just <b>toughen up</b> bro",
    "Some people need to <b>die and make room</b>",
    "You're a fucking <b>casual</b>",
    "Have you tried <b>getting good</b>",
    "You are a <b>waste of space</b>",
    "Don't be so offended",
    "<b>Kill yourself</b>",
    "Less <b>useless creatures</b> means more oxygen for the rest of us",
    "I wouldn't even get up if I looked that <b>ugly</b>",
    "<b>You suck!</b>",
    "Stop being so <b>weak</b>",
    "You're <b>not a real fan</b>",
    "Grow the fuck up!",
    "You need a <b>thicker skin</b>"
  ];

  let maxBubbles = 35;

  // Creates maxBubbles of speech bubbles and assigns them a random entry from toxicMsgs array
  for (let i = 0; i <= maxBubbles; i++) {

    // Create new p element with a class of "bubble" then inserts a random message from the toxicMsgs array and puts it in the p
    let newBubble = document.createElement("p");
    newBubble.className = "bubble";
    newBubble.innerHTML = `${toxicMsgs[Math.floor(Math.random() * toxicMsgs.length)]} `;

    commentsSection.appendChild(newBubble);

    // Makes the bubbles draggable within any area of the window
    Draggable.create('.bubble', {});
    Draggable.zIndex = 900;
  }

  // Timeline to stagger the entry of each bubble
  let bubbleSequence = gsap.timeline({
    defaults: {
      delay: 0.5,
      scale: 0,
      transformOrigin: "0 0",
    }
  })
  .from(".bubble", {paused: true})
  .to(".bubble", {
    scale: 1,
    transformOrigin: "0% 100%",
    stagger: {
      amount: 8,
      ease: "power2.Out"
    }
  })

  /* Function that calculates the position of each bubble and the browser window, then absolute positions the bubbles randomly across the screen */
  function displayMsgs() {

    let msgBubbles = document.querySelectorAll(".bubble");

    // Loops through each individual message and adds a timeline to each one, as well as positioning each message randomly within the browser window.
    msgBubbles.forEach((speechBubble, index) => {

      // Calculates the width of each message box
      bubbleWidth = speechBubble.offsetWidth;
      bubbleHeight = speechBubble.offsetHeight;

      // Stores size of the message box minus the browsers size
      let xMax = window.innerWidth - bubbleWidth;
      let yMax = window.innerHeight - bubbleHeight;

      // Positions each individual box randomly within the browser window
      let bubbleX = Math.random() * xMax * 1;
      let bubbleY = Math.random() * yMax * 1;

      speechBubble.style.left = `${bubbleX}px`
      speechBubble.style.top = `${bubbleY}px`
    })
  }

  //////////////////////////
  // START BUTTON + MISC //
  /////////////////////////

  const startBtn = document.querySelector(".start");
  const clrBtn = document.querySelector(".clear");

  startBtn.addEventListener("click", () => {
    switch (startBtn.innerHTML) {
      case "Get Started":
        startBtn.innerHTML = "Proceed";
        // Hide intro; show warning
        introSection.classList.toggle("hidden");
        warningSection.classList.toggle("hidden");
        warningSequence.play(0);
        break;
      case "Proceed":
        startBtn.innerHTML = "Restart";
        // Hide warning, show comments
        warningSection.classList.toggle("hidden");
        commentsSection.classList.remove("hidden");
        infoSection.classList.toggle("hidden");
        clrBtn.classList.toggle("hidden");
        displayMsgs();
        infoSequence.play(0);
        bubbleSequence.play(0);
        break;
      case "Restart":
        startBtn.innerHTML = "Get Started";
        // Hide comments, show intro
        introSection.classList.toggle("hidden");
        commentsSection.classList.add("hidden");
        infoSection.classList.toggle("hidden");
        clrBtn.classList.toggle("hidden");
        // Restarts timelines
        introSequence.play(0);
    }
  });

  clrBtn.addEventListener("click", () => {
    commentsSection.classList.add("hidden");
  });

  // Draggable example button
  Draggable.create('.exampleBubble', {});
  Draggable.zIndex = 900;

})