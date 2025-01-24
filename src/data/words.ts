export type Word = {
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  origin?: string;
  language: string;
};

export const words: Word[] = [
  // English
  {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədi/",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way",
    example: "The discovery of penicillin was a perfect example of serendipity",
    origin: "Coined by Horace Walpole in 1754 from the Persian fairy tale 'The Three Princes of Serendip'",
    language: "English",
  },
  // Spanish
  {
    word: "Sobremesa",
    pronunciation: "/so.βɾeˈme.sa/",
    meaning: "The time spent after lunch or dinner, talking to the people you shared the meal with",
    example: "La sobremesa duró horas mientras charlábamos",
    origin: "From Spanish 'sobre' (over) + 'mesa' (table)",
    language: "Spanish",
  },
  // French
  {
    word: "Flâneur",
    pronunciation: "/flɑnœʁ/",
    meaning: "A person who strolls around observing society",
    example: "Il est un vrai flâneur dans les rues de Paris",
    origin: "From French 'flâner' meaning 'to stroll'",
    language: "French",
  },
  // Japanese
  {
    word: "木漏れ日",
    pronunciation: "Komorebi",
    meaning: "Sunlight filtering through trees",
    example: "公園で木漏れ日を見ながら読書をする",
    origin: "Compound of 木 (tree) + 漏れ (leaking) + 日 (sun)",
    language: "Japanese",
  },
  // German
  {
    word: "Fernweh",
    pronunciation: "/ˈfɛʁnveː/",
    meaning: "A longing for distant places",
    example: "Das Fernweh treibt sie in die Ferne",
    origin: "From German 'fern' (far) + 'Weh' (pain)",
    language: "German",
  },
  // More languages and words can be added here
];

export const availableLanguages = Array.from(new Set(words.map(word => word.language)));