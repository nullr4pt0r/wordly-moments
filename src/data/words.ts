export type Word = {
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  origin?: string;
  language: string;
  timeOfDay?: 'morning' | 'evening' | 'night';
};

export const words: Word[] = [
  // English - Morning Words
  {
    word: "Dawn",
    pronunciation: "/dɔːn/",
    meaning: "The first appearance of light in the sky before sunrise",
    example: "The birds began singing at dawn",
    origin: "From Old English 'dagian' meaning to become day",
    language: "English",
    timeOfDay: "morning"
  },
  {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədi/",
    meaning: "The occurrence and development of events by chance in a happy way",
    example: "The discovery of penicillin was a perfect example of serendipity",
    origin: "Coined by Horace Walpole in 1754 from the Persian fairy tale",
    language: "English",
    timeOfDay: "morning"
  },
  // English - Evening Words
  {
    word: "Twilight",
    pronunciation: "/ˈtwaɪlaɪt/",
    meaning: "The soft glowing light from the sky when the sun is below the horizon",
    example: "The city looks magical during twilight",
    origin: "From Middle English 'twilight', meaning 'two lights'",
    language: "English",
    timeOfDay: "evening"
  },
  // English - Night Words
  {
    word: "Ethereal",
    pronunciation: "/ɪˈθɪəriəl/",
    meaning: "Extremely delicate and light in a way that seems not to be of this world",
    example: "The moonlight created an ethereal atmosphere",
    origin: "From Latin 'aether', meaning the upper air",
    language: "English",
    timeOfDay: "night"
  },
  // Spanish Words
  {
    word: "Sobremesa",
    pronunciation: "/so.βɾeˈme.sa/",
    meaning: "Time spent after lunch or dinner, talking to the people you shared the meal with",
    example: "La sobremesa duró horas mientras charlábamos",
    origin: "From Spanish 'sobre' (over) + 'mesa' (table)",
    language: "Spanish",
    timeOfDay: "evening"
  },
  {
    word: "Madrugada",
    pronunciation: "/ma.ðɾuˈɣa.ða/",
    meaning: "The time between midnight and dawn",
    example: "Llegó a casa de madrugada",
    origin: "From Spanish 'madrugar' (to rise early)",
    language: "Spanish",
    timeOfDay: "night"
  },
  // French Words
  {
    word: "Flâneur",
    pronunciation: "/flɑnœʁ/",
    meaning: "A person who strolls around observing society",
    example: "Il est un vrai flâneur dans les rues de Paris",
    origin: "From French 'flâner' meaning 'to stroll'",
    language: "French",
    timeOfDay: "evening"
  },
  // Japanese Words
  {
    word: "木漏れ日",
    pronunciation: "Komorebi",
    meaning: "Sunlight filtering through trees",
    example: "公園で木漏れ日を見ながら読書をする",
    origin: "Compound of 木 (tree) + 漏れ (leaking) + 日 (sun)",
    language: "Japanese",
    timeOfDay: "morning"
  },
  // German Words
  {
    word: "Fernweh",
    pronunciation: "/ˈfɛʁnveː/",
    meaning: "A longing for distant places",
    example: "Das Fernweh treibt sie in die Ferne",
    origin: "From German 'fern' (far) + 'Weh' (pain)",
    language: "German",
    timeOfDay: "evening"
  }
];

export const availableLanguages = Array.from(new Set(words.map(word => word.language)));

export const getWordByTimeAndLocation = (
  timeOfDay: 'morning' | 'evening' | 'night',
  userLanguage: string = 'English'
): Word => {
  // First try to find a word matching both time of day and user's language
  const matchingWords = words.filter(
    word => word.timeOfDay === timeOfDay && word.language === userLanguage
  );

  // If no match, fall back to English words for that time of day
  const fallbackWords = words.filter(
    word => word.timeOfDay === timeOfDay && word.language === 'English'
  );

  // If still no match, return any English word
  const defaultWords = words.filter(word => word.language === 'English');

  return matchingWords[0] || fallbackWords[0] || defaultWords[0];
};