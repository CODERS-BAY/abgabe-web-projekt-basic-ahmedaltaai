"use strict";

// grab modal close button
const close = document.getElementById("close");

// grab modal header and modal content
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

// grabing pictures to open the modal
const firstPicture = document.getElementById("picture01");
const secondPicture = document.getElementById("picture02");
const thirdPicture = document.getElementById("picture03");
const fourthPicture = document.getElementById("picture04");
const fifthPicture = document.getElementById("picture05");
const sixthPicture = document.getElementById("picture06");
const seventhPicture = document.getElementById("picture07");
const eighthPicture = document.getElementById("picture08");
const ninethPicture = document.getElementById("picture09");
const tenthPicture = document.getElementById("picture10");
const eleventhPicture = document.getElementById("picture11");
const twelfthPicture = document.getElementById("picture12");
const thirteenthPicture = document.getElementById("picture13");
const fourteenthPicture = document.getElementById("picture14");
const fifteenthPicture = document.getElementById("picture15");
const sixteenthPicture = document.getElementById("picture16");
const seventeenthPicture = document.getElementById("picture17");
const eightteenthPicture = document.getElementById("picture18");
const nineteenthPicture = document.getElementById("picture19");
const twentiethPicture = document.getElementById("picture20");

// eventListiner for modal close
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

// grab faders for fading the pictures in
const faders = document.querySelectorAll(".fade-in");

function modalPictures() {
  // eventListiner for opening the modal on the first picture
  function firstPictureModal() {
    firstPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Fettverbrennung beim Sport erst nach 30 Minuten</h3>";
      modalBody.innerHTML =
        "<p>Falsch! Bereits ab der ersten Minute Bewegung kurbelt der Körper die Fettverbrennung an. Allerdings hat diese erst nach 30 Minuten ihre Höchstleistung erreicht. Wer also sein Fett wegkriegen möchte, sollte möglichst länger als eine halbe Stunde trainieren. Beim Ausdauersport sollte man es zudem nicht zu ruhig angehen. Am effizientesten funktioniert die Fettverbrennung, wenn man bei 70 bis 80 Prozent seines Maximalpulses trainiert.</p>";
    });
  }
  firstPictureModal();

  // eventListiner for opening the modal on the second picture
  function secondPictureModal() {
    secondPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Wer schwitzt, ist nicht fit</h3>";
      modalBody.innerHTML =
        "<p>Im Gegenteil: Sportler besitzen eine bessere Thermoregulation. Da ihre Muskeln und Zellen leistungsfähiger sind, geben sie bei Belastung mehr Schweiß ab, als bei unsportlichen Menschen.</p>";
    });
  }
  secondPictureModal();

  // eventListiner for opening the modal on the third picture
  function thirdPictureModal() {
    thirdPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Krafttraining macht dicke Muskeln</h3>";
      modalBody.innerHTML =
        "<p>Gerade Frauen fürchten oft, von Krafttraining eine Bodybuilder-Figur zu bekommen. Diese Angst ist jedoch unbegründet. Der Muskelaufbau wird vom männlichen Geschlechtshormon Testosteron bestimmt, welches vom weiblichen Organismus nur in geringen Mengen produziert wird. Krafttraining bewirkt bei Frauen daher eher eine straffere und schlankere Silhouette.</p>";
    });
  }
  thirdPictureModal();

  // eventListiner for opening the modal on the fourth picture
  function fourthPictureModal() {
    fourthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Stretching bringt nichts</h3>";
      modalBody.innerHTML =
        "<p>Über die Effekte von Stretching vor dem Sport streiten sich die Experten. Im Zweifelsfall ist hier lockeres Aufwärmen sinnvoller. Nach dem Training sollte man aber nicht auf die Dehnübungen verzichten: Gedehnte Muskeln werden besser durchblutet, bleiben geschmeidig und können sich besser regenerieren. Während des Stretchings sollte man nicht dynamisch hin- und herfedern, sondern lieber die Dehnung 20 Sekunden lang ruhig halten.</p>";
    });
  }
  fourthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function fifthPictureModal() {
    fifthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Sportler brauchen eine spezielle Ernährung</h3>";
      modalBody.innerHTML =
        "<p>Auch wenn manche Freizeitsportler meinen, nach einem halbstündigen Dauerlauf gleich zu isotonischen Wunderdrinks, Vitaminpillen, Powershakes und Energieriegeln greifen zu müssen – diese Produkte sind nur für Leistungssportler gedacht. Nahrungsergänzungsmittel allein machen müde Muskeln nicht munter. Teilweise finden sich sogar verbotene Stoffe in den Lebensmitteln. Statt zu Powerriegel und Sportlerdrink besser zu Banane und Saftschorle greifen.</p>";
    });
  }
  fifthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function sixthPictureModal() {
    sixthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Durch Gerätetraining nimmt man nicht ab</h3>";
      modalBody.innerHTML =
        "<p>Wer regelmäßig an Geräten Krafttraining macht, sollte sich nicht wundern, wenn er sogar mehr Pfunde auf die Waage bringt, als zu unsportlichen Zeiten. Das sollte jedoch kein Grund zur Sorge sein, denn Muskeln sind schwerer als Fett. Durch eine höhere Muskelmasse wird übrigens auch der Grundumsatz an Kalorien erhöht. Die Folge: Selbst im Schlaf verbrennen muskulöse Menschen mehr Fett als Sportmuffel.</p>";
    });
  }
  sixthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function seventhPictureModal() {
    seventhPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Nur einmal pro Woche trainieren bringt nichts</h3>";
      modalBody.innerHTML =
        "<p>Einmal ist auf jeden Fall besser als Keinmal. Besonders Anfänger können ihre Fitness bereits mit einem einstündigen Training pro Woche enorm steigern. Durch eine Kombination aus Kraft- und Ausdauertraining wird die Leistungsfähigkeit gesteigert, der Blutdruck sinkt, Cholesterinwerte verbessern sich und das allgemeine Wohlbefinden steigt.</p>";
    });
  }
  seventhPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function eighthPictureModal() {
    eighthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Bei Krafttraining müssen Muskeln schmerzen</h3>";
      modalBody.innerHTML =
        "<p>Im Gegenteil. Wer zu viele Gewichte auflegt, kann sich schnell überanstrengen und sogar verletzen. Viel effektiver kann der Körper gestrafft werden, wenn die Gewichte verhältnismäßig leicht sind, dafür die Übungen umso öfter wiederholt werden.</p>";
    });
  }
  eighthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function ninethPictureModal() {
    ninethPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Sauna macht schlank</h3>";
      modalBody.innerHTML =
        "<p>Schwitzen hat nichts mit Fettverbrennung zu tun. Der Körper verliert in der Sauna Wasser und Mineralien, aber kein Gramm Fett. Die Pfunde, die man in der Sauna „ausgeschwitzt“ hat, sollte man sofort mit Wasser wieder auffüllen.</p>";
    });
  }
  ninethPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function tenthPictureModal() {
    tenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Joggen ist schlecht für die Gelenke</h3>";
      modalBody.innerHTML =
        "<p>Beim Joggen wirkt das zwei- bis dreifache Körpergewicht auf die Gelenke. Dennoch erhöht Joggen ihre Funktionstüchtigkeit, denn durch die Bewegung wird mehr Gelenkflüssigkeit produziert. Dadurch können die Knorpel optimal mit Flüssigkeit versorgt werden und bleiben länger gesund und in Form. Stark übergewichtige, unsportliche Menschen sollten jedoch mit Walking beginnen, um die Gelenke langsam an die Bewegung zu gewöhnen.</p>";
    });
  }
  tenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function eleventhPictureModal() {
    eleventhPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Langsames Laufen lässt die Pfunde schmelzen</h3>";
      modalBody.innerHTML =
        "<p>Wer zu langsam läuft, tut zwar etwas für seine Gesundheit, bleibt aber auf seinem Fett sitzen. Der Gesamtenergieumsatz ist bei niedriger Anstrengung deutlich geringer als bei höherer Intensität. Ein Auto, das schnell fährt, verbraucht schließlich auch mehr Sprit. Am effizientesten funktioniert die Fettverbrennung bei 70 bis 80 Prozent des Maximalpulses. Anfänger dürfen langsam einsteigen, können den Kalorienverbrauch jedoch durch kurze Zwischensprints erhöhen.</p>";
    });
  }
  eleventhPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function twelfthPictureModal() {
    twelfthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Kaffee – ein Tabu für Sportler?</h3>";
      modalBody.innerHTML =
        "<p>Kaffee entzieht dem Körper Wasser und steigert den Blutdruck? Unsinn! Gerade Sportler können Kaffee als Geheimwaffe einsetzen. Eine Stunde vor dem Training getrunken, kurbelt ein Espresso nämlich sowohl den Kreislauf, als auch den Energieverbrauch an.</p>";
    });
  }
  twelfthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function thirteenthPictureModal() {
    thirteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Muskelkater als Zeichen für gutes Training</h3>";
      modalBody.innerHTML =
        "<p>Schmerzende Muskeln nach dem Training bedeuten nur eines: man hat sich übernommen. Bei Muskelkater entstehen nämlich durch Überanstrengung kleine Risse im Muskelgewebe. Die Dehnungsschmerzen sind also kein Indikator für Muskelwachstum, sondern für Überlastung.</p>";
    });
  }
  thirteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function fourteenthPictureModal() {
    fourteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Radfahren macht impotent</h3>";
      modalBody.innerHTML =
        "<p>Nicht das Radfahren an sich, sondern der falsche Sattel kann unter Umständen Impotenz verursachen. Besonders bei sportlichen Rennsatteln mit langer Nase kann durch den ständigen Druck auf die Dammregion die Blutzufuhr zum Penis beeinträchtigt werden. Abhilfe schafft ein breiterer Sattel, bestenfalls mit einer großen Einkerbung an der Spitze. Zudem sollte die Nase des Sattels nicht nach oben, sondern geradeaus zeigen. Häufige Pausen oder Sprinteinlagen im Stehen lassen das Blut wieder zirkulieren.</p>";
    });
  }
  fourteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function fifteenthPictureModal() {
    fifteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML =
        "<h3>Rückenmuskeltraining hilft bei Rückenschmerzen</h3>";
      modalBody.innerHTML =
        "<p>Rückenschmerzen kann man durch gezieltes Krafttraining Abhilfe schaffen. Dabei spielen jedoch nicht nur die Rücken-, sondern auch die Bauchmuskeln eine große Rolle. Ein ausgewogenes Training dieser beiden Partien sorgt für einen kräftigen Torso, der nicht so leicht ins Hohlkreuz kippen kann. Um eine Verkürzung der Muskeln auszuschließen, sollte man nach dem Training das Dehnen nicht vergessen.</p>";
    });
  }
  fifteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function sixteenthPictureModal() {
    sixteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Schwangere sollten keinen Sport treiben</h3>";
      modalBody.innerHTML =
        "<p>Sport in der Schwangerschaft wirkt sich grundsätzlich positiv auf Mutter und Kind aus. Er steigert das Wohlbefinden und sorgt schon während der Schwangerschaft dafür, dass sich der Körper nach der Geburt wieder schneller regeneriert. Vermeiden sollten werdende Mütter aber Sportarten mit direktem Gegnerkontakt, Leistungssport, Skifahren und Reiten. Ideal ist leichtes Ausdauertraining wie Walking oder Schwimmen. Bei einer Risikoschwangerschaft sollte jedoch vorher ein Gynäkologe zu Rate gezogen werden.</p>";
    });
  }
  sixteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function seventeenthPictureModal() {
    seventeenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Mit Muskeltraining gezielt Fett abbauen</h3>";
      modalBody.innerHTML =
        "<p>Stimmt leider nicht. Gezieltes Bauch-Beine-Po-Training führt in der Regel nicht dazu, dass auch genau an diesen Stellen Fett abgebaut wird. Es ist individuell festgelegt, wo und in welcher Reihenfolge der Körper Fettdepots abbaut. Bei Frauen verschwindet häufig der Speck am Oberkörper schneller, als an Hüften und Po. Es ist jedoch möglich, gezielt Muskulatur aufzubauen.</p>";
    });
  }
  seventeenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function eightteenthPictureModal() {
    eightteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Nach Sport zwei Stunden nichts essen</h3>";
      modalBody.innerHTML =
        "<p>Nach intensivem Training verbrennt der Körper auch Stunden nach dem Sport noch Fett. Dass man in dieser Zeit nichts essen sollte, ist jedoch ein Märchen. Wer abnehmen will, sollte darauf achten, dass er nicht mehr Kalorien zu sich nimmt, als er verbrennt. Wann man diese Kalorien isst, ist egal. Der Bedarf an Eiweiß liegt nach dem Sport sogar höher als sonst, denn es hilft den Muskeln, sich zu regenerieren.</p>";
    });
  }
  eightteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function nineteenthPictureModal() {
    nineteenthPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Mit Sit-ups zum perfekten Sixpack</h3>";
      modalBody.innerHTML =
        "<p>Ein muskulöser Bauch ist wesentlich schwerer anzutrainieren, als beispielsweise kräftige Oberarme. Trotz intensiven Trainings liegt besonders bei Frauen häufig eine Fettschicht über den Muskeln. Bevor also die Muskeln in Erscheinung treten können, müssen Sie erst einmal dem Bauchfett den Kampf ansagen. Das funktioniert am besten durch fettarme Ernährung und regelmäßiges Ausdauertraining. Erst dann bringen auch die Sit-ups sichtbare Resultate.</p>";
    });
  }
  nineteenthPictureModal();

  // eventListiner for opening the modal on the fifth picture
  function twentiethPictureModal() {
    twentiethPicture.addEventListener("click", () => {
      modal.classList.add("show-modal");
      modalTitle.innerHTML = "<h3>Sport macht schlank</h3>";
      modalBody.innerHTML =
        "<p>Sport allein bringt nichts bei ungesunder Ernährung. Wer dauerhaft abnehmen möchte, sollte immer weniger Kalorien zu sich nehmen, als er verbraucht. Nur in Kombination mit bewusster Ernährung und regelmäßigem Sport ist gesundes Abnehmen möglich.</p>";
    });
  }
  twentiethPictureModal();
}
modalPictures();

// fading pictures in
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -20px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entreis,
  appearOnScroll
) {
  entreis.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// function printID(e) {
//   e = e || window.event;
//   e = e.target || e.srcElement;
//   console.log("ID: " + e.id);
// }

// insert this on the wanted html targe
// onclick="printID(this.id);"
