// app.ts
import { story } from "./data-ch.js";

type Dialog = {
  scene: string;
  character: string;
  topic: string;
  motto: string;
  phrases: string[];
};

let currentIndex = 0;
let currentStory: Dialog[] = [];
let isSwissGerman = true;
let currentPhraseIndices: [number, number] = [0, 1];

const dialogSection = document.getElementById("dialog-section")!;
const mottoElement = document.getElementById("motto")!;
const progressBar = document.getElementById("progress") as HTMLProgressElement;
const languageToggleBtn = document.getElementById("language-toggle")!;

function getRandomPhraseIndices(phrases: string[]): [number, number] {
  if (phrases.length <= 2) {
    return [0, 1];
  }
  let first = Math.floor(Math.random() * phrases.length);
  let second;
  do {
    second = Math.floor(Math.random() * phrases.length);
  } while (second === first);
  return [first, second];
}

async function loadData() {
  if (isSwissGerman) {
    const module = await import("./data-ch.js");
    currentStory = module.story;
    languageToggleBtn.textContent = "Standarddeutsch";
  } else {
    const module = await import("./data-de.js");
    currentStory = module.story;
    languageToggleBtn.textContent = "Schwiizerdütsch";
  }
  currentIndex = 0;
  currentPhraseIndices = getRandomPhraseIndices(currentStory[0].phrases);
  renderDialog(currentIndex);
}

function renderDialog(index: number) {
  const dialog = currentStory[index];
  if (!dialog) {
    dialogSection.innerHTML = `<p>Ende der Geschichte. Danke fürs Lesen!</p>
      <button id="restart-btn">Neu starten</button>`;
    mottoElement.textContent = "";
    progressBar.value = currentStory.length;
    document.getElementById("restart-btn")!.addEventListener("click", () => {
      currentIndex = 0;
      currentPhraseIndices = getRandomPhraseIndices(currentStory[0].phrases);
      renderDialog(currentIndex);
    });
    return;
  }

  progressBar.value = index;

  // Phrasen-Indices für aktuelle Szene
  const [i1, i2] = currentPhraseIndices;

  dialogSection.innerHTML = `
    <header>
      <h2>${dialog.scene} mit ${dialog.character}</h2>
      <p><strong>Thema:</strong> ${dialog.topic}</p>
    </header>
    <div class="phrases">
      <button data-choice="0">${dialog.phrases[i1]}</button>
      <button data-choice="1">${dialog.phrases[i2]}</button>
    </div>
  `;

  mottoElement.textContent = `Motto: "${dialog.motto}"`;

  const buttons = dialogSection.querySelectorAll("button[data-choice]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex++;
      if (currentStory[currentIndex]) {
        currentPhraseIndices = getRandomPhraseIndices(currentStory[currentIndex].phrases);
      }
      renderDialog(currentIndex);
    });
  });
}

languageToggleBtn.addEventListener("click", () => {
  isSwissGerman = !isSwissGerman;
  loadData();
});

// Initial laden
loadData();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}
