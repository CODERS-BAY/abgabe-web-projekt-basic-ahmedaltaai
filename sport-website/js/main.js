"use strict";

// grab navbar toggle button – mobile/tablet
const toggle = document.querySelector(".toggle");

// toggle navbar – mobile/tablet
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// applying typewritter-effect to the qoutes on the home page
var i = 0;
var text01 = '"If it doesn´t challenge you, it doesn´t change you."';
var text02 =
  "Eine winzige Veränderung heute bringt ein dramatisch Verändertes morgen.";
var text03 =
  "Sometimes life hits you in the head with a brick. Don’t lose faith.";
var text04 =
  "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.";

function typing() {
  if (i < text01.length) {
    document.querySelector(".animated_text01").innerHTML += text01.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();
