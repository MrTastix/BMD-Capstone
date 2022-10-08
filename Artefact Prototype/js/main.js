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
    "Just <b>TOUGHEN UP</b> bro",
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
    // Insert custom messages
    for (let i = 0; i <= 51; i++) {

      let newBubble = document.createElement("p");
      newBubble.innerHTML = `${toxicMsgs[Math.floor(Math.random() * toxicMsgs.length)]} `;

      commentsContainer.appendChild(newBubble);

      if (i == 50) {
        displayMsgs(firstMsgSet);
      }
    }
  }

  function displayMsgs(groupName) {

    // Select each individual comment
    let msgBubbles = document.querySelectorAll(`#firstMsgSet p`);

    // Loops through each individual message and adds a timeline to each one, as well as positioning each message randomly within the browser window.
    msgBubbles.forEach((speechBubble, index) => {

      // Calculates the width of each message box
      bubbleWidth = speechBubble.offsetWidth;
      bubbleHeight = speechBubble.offsetHeight;

      // Stores size of the message box minus the browsers size
      let xMax = window.innerWidth - bubbleWidth;
      let yMax = window.innerHeight - bubbleHeight;

      // Positions each individual box randomly within the browser window
      let bubbleX = Math.random() * xMax * 0.9;
      let bubbleY = Math.random() * yMax * 0.9;

      speechBubble.style.left = `${bubbleX}px`
      speechBubble.style.top = `${bubbleY}px`

      // Timeline defaults for each instance
      gsap.timeline({
        defaults: {
          stagger: {
            amount: 3
          }
        }
      })
        // Boxes zoom into view from the bottom left anchor point
        .from(msgBubbles, {
          scale: 0,
          transformOrigin: "0% 0%"
        })
        .to(msgBubbles, {
          scale: 1,
          transformOrigin: "0% 100%"
        })
    })
  }

  ///////////////////
  // START BUTTON //
  //////////////////

  /*
 
    This section deals with the "Get Started" button that, when pressed, hides the intro sequence and starts the comment one, alongside a "Restart" button resetting both sequences.
 
  */

  const introSection = document.querySelector(".typewriter");
  const msgSection = document.querySelector(".comments");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    if (!button.classList.contains("opened")) {
      button.classList.toggle("opened");
      introSection.classList.add("hidden"); // hides the intro sequence
      msgSection.classList.remove("hidden"); // unhides comment sequence
      button.innerHTML = "Restart"; // changes button text
      addMsg();
    } else {
      introSequence.play(0); // pauses intro sequence
      button.classList.toggle("opened");
      introSection.classList.remove("hidden"); // unhides the intro sequence
      msgSection.classList.add("hidden"); // hides comment sequence
      button.innerHTML = "Get Started"; // reverts button text
    }
  });


})