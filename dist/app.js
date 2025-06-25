const dialogSection = document.getElementById("dialog-section");
const mottoElement = document.getElementById("motto");
const progressBar = document.getElementById("progress");
const languageToggleBtn = document.getElementById("language-toggle");
let currentIndex = 0;
let currentStory = [];
let isSwissGerman = true;
async function loadData() {
    if (isSwissGerman) {
        const module = await import("./data-ch.js");
        currentStory = module.story;
        languageToggleBtn.textContent = "Standarddeutsch";
    }
    else {
        const module = await import("./data-de.js");
        currentStory = module.story;
        languageToggleBtn.textContent = "Schwiizerdütsch";
    }
    currentIndex = 0;
    renderDialog(currentIndex);
}
function renderDialog(index) {
    const dialog = currentStory[index];
    if (!dialog) {
        dialogSection.innerHTML = `<p>Ende der Geschichte. Danke fürs Lesen!</p>
      <button id="restart-btn">Neu starten</button>`;
        mottoElement.textContent = "";
        progressBar.value = currentStory.length;
        document.getElementById("restart-btn").addEventListener("click", () => {
            currentIndex = 0;
            renderDialog(currentIndex);
        });
        return;
    }
    progressBar.value = index;
    dialogSection.innerHTML = `
    <header>
      <h2>${dialog.scene} mit ${dialog.character}</h2>
      <p><strong>Thema:</strong> ${dialog.topic}</p>
    </header>
    <div class="phrases">
      <button data-choice="0">${dialog.phrases[0]}</button>
      <button data-choice="1">${dialog.phrases[1]}</button>
    </div>
  `;
    mottoElement.textContent = `Motto: "${dialog.motto}"`;
    // Eventlistener für Buttons
    const buttons = dialogSection.querySelectorAll("button[data-choice]");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Hier kann Motto-Logik eingebaut werden, aktuell linear
            currentIndex++;
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
export {};
