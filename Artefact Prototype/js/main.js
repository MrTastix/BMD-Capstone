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
        value: "This is what it feels like."
      },
      duration: 2,
      delay: 0.75,
      ease: "none"
    })

  /* -------------------- */

  ///////////////////////
  // COMMENTS SEQUENCE //
  ///////////////////////

  /* Array of all the toxic messages to be sent */
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
  ];

  /* Container that will hold the messages  */
  const commentsContainer = document.querySelector(".comments");

  function addMsg() {
    maxBubbles = 30;

    // Insert custom messages
    for (let i = 0; i <= maxBubbles; i++) {

      let newBubble = document.createElement("div");
      newBubble.className = "bubble";
      newBubble.innerHTML = `${toxicMsgs[Math.floor(Math.random() * toxicMsgs.length)]} `;

      commentsContainer.appendChild(newBubble);

      if (i == maxBubbles) {
        displayMsgs();
      }

      Draggable.create('.bubble', {});
    }
  }

  function displayMsgs() {

    // Select each individual comment
    const msgBubbles = document.querySelectorAll(".bubble");

    let bubbleTimeline = new gsap.timeline({
      defaults: {
        delay: 0.5,
        scale: 0,
        transformOrigin: "0 0",
        stagger: {
          amount: 15
        }
      }
    })

    // Speech bubbles zoom into view from the bottom left anchor point
    bubbleTimeline.from(msgBubbles, {})
      .to(msgBubbles, {
        scale: 1,
        transformOrigin: "0% 100%"
      })

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

  ///////////////////
  // START BUTTON //
  //////////////////

  const introSection = document.querySelector("#intro");
  const warningSection = document.querySelector("#warning");
  const infoSection = document.querySelector("#info");
  const msgSection = document.querySelector(".comments");
  const startBtn = document.querySelector(".start");
  const clrBtn = document.querySelector(".clear");

  startBtn.addEventListener("click", () => {
    switch (startBtn.innerHTML) {
      case "Get Started":
        startBtn.innerHTML = "Proceed";
        // Hide intro; show warning
        introSection.classList.toggle("hidden");
        warningSection.classList.toggle("hidden");
        break;
      case "Proceed":
        startBtn.innerHTML = "Restart";
        // Hide warning, show comments
        warningSection.classList.toggle("hidden");
        msgSection.classList.remove("hidden");
        infoSection.classList.toggle("hidden");
        clrBtn.classList.toggle("hidden");
        addMsg();
        break;
      case "Restart":
        startBtn.innerHTML = "Get Started";
        // Hide comments, show intro
        introSection.classList.toggle("hidden");
        msgSection.classList.add("hidden");
        infoSection.classList.toggle("hidden");
        clrBtn.classList.toggle("hidden");
        // Restart intro timeline
        introSequence.play(0);
    }
  });

  clrBtn.addEventListener("click", () => {
      msgSection.classList.add("hidden");
    });

})