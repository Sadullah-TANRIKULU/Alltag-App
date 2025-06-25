// data.ts
export type Dialog = {
  scene: string;
  character: string;
  topic: string;
  motto: string;
  phrases: [string, string];
};

export const story: Dialog[] = [
  {
    scene: "Aufwachen",
    character: "Ich",
    topic: "Morgenroutine",
    motto: "Übung macht den Meister",
    phrases: [
      "Guete Morge! Ziit für en neue Tag.",
      "No chli schlofe? Aber d'Routine wartet."
    ],
  },
  {
    scene: "Bus",
    character: "Oksana",
    topic: "Soziologie",
    motto: "Dein Erfolg steckt in deiner täglichen Routine",
    phrases: [
      "Hesch d'Soziologie-Prüefig scho gmacht?",
      "Was meinsch zum neue Semester?"
    ],
  },
  {
    scene: "Hausaufgaben",
    character: "Maria",
    topic: "Schnelles Lernen",
    motto: "Übung macht den Meister",
    phrases: [
      "Mir gönd d'Hausaufgabe zäme a.",
      "Eifach Schritt für Schritt, das klappt!"
    ],
  },
  {
    scene: "Pause",
    character: "Akash",
    topic: "Pause Dauer",
    motto: "Lügen haben kurze Beine",
    phrases: [
      "Wie lang isch d'Pause hüt?",
      "Mir müend d'Ziit guet nutze."
    ],
  },
  {
    scene: "Mittagessen",
    character: "Ali Akbar",
    topic: "Job finden",
    motto: "Gebet ändert das Schicksal",
    phrases: [
      "Ich suech no en Job, hesch Tipps?",
      "Übung und Geduld sind wichtig."
    ],
  },
  {
    scene: "Nach der Arbeit",
    character: "Roksolana",
    topic: "Deutsche Aussprache",
    motto: "Dein Erfolg steckt in deiner täglichen Routine",
    phrases: [
      "Wie chasch du dini Aussprache verbessere?",
      "Viel üebe und nüt ufgeh!"
    ],
  },
  {
    scene: "Bibliothek",
    character: "Bibliothekarin",
    topic: "Wi-Fi und Kaffee",
    motto: "Lügen haben kurze Beine",
    phrases: [
      "Wi-Fi funktioniert guet, aber Kaffee isch besser.",
      "Ohni Kaffee gaht nüt, gäll?"
    ],
  },
  {
    scene: "Busfahrt",
    character: "Busfahrer",
    topic: "Schwiiezerdüetsch Begrüssig",
    motto: "Übung macht den Meister",
    phrases: [
      "Guete Morge, mitenand!",
      "Bitte schnallt euch ah, mir fahre jetzt."
    ],
  },
  {
    scene: "Zug",
    character: "Zufällige Leute",
    topic: "Buch 'Das Verbrechen ruht nie'",
    motto: "Gebet ändert das Schicksal",
    phrases: [
      "Hesch das Buch scho gläse?",
      "Es isch spannend, gäll?"
    ],
  },
  {
    scene: "Traum",
    character: "Ich",
    topic: "Traum erleben",
    motto: "Dein Erfolg steckt in deiner täglichen Routine",
    phrases: [
      "Ich ha en komische Traum gha.",
      "Was heisst das wohl?"
    ],
  }
];
