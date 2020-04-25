"use strict";

//grab modal header and modal content
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

// grab navbar toggle button – mobile/tablet
const toggle = document.querySelector(".toggle");

// grab modal close button
const close = document.getElementById("close");

// grabing pictures to open the modal
const firstPicture = document.getElementById("firstPicture");
const secondPicture = document.getElementById("secondPicture");

// eventListiner for opening the modal on the first picture
function firstPictureModal() {
  firstPicture.addEventListener("click", () =>
    modal.classList.add("show-modal")
  );
  modalTitle.innerHTML =
    "<h3>Fettverbrennung beim Sport erst nach 30 Minuten</h3>";
  modalBody.innerHTML =
    "<p>Falsch! Bereits ab der ersten Minute Bewegung kurbelt der Körper die Fettverbrennung an. Allerdings hat diese erst nach 30 Minuten ihre Höchstleistung erreicht. Wer also sein Fett wegkriegen möchte, sollte möglichst länger als eine halbe Stunde trainieren. Beim Ausdauersport sollte man es zudem nicht zu ruhig angehen. Am effizientesten funktioniert die Fettverbrennung, wenn man bei 70 bis 80 Prozent seines Maximalpulses trainiert.</p>";
}
firstPictureModal();

// eventListiner for opening the modal on the second picture
function secondPictureModal() {
  secondPicture.addEventListener("click", () =>
    modal.classList.add("show-modal")
  );
  modalTitle.innerHTML = "<h3>Wer schwitzt, ist nicht fit</h3>";
  modalBody.innerHTML =
    "<p>Im Gegenteil: Sportler besitzen eine bessere Thermoregulation. Da ihre Muskeln und Zellen leistungsfähiger sind, geben sie bei Belastung mehr Schweiß ab, als bei unsportlichen Menschen.</p>";
}
secondPictureModal();

// toggle navbar – mobile/tablet
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// eventListiner for modal close
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
