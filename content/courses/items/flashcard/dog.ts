import { FlashCardExercise } from "@/types/course";

export const dogFlashCard: FlashCardExercise = {
  id: 3,
  type: "flashCard",
  question: {
    en: 'Which one of these is "dog"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ನಾಯಿ"?',
    te: 'వీటిలో ఏది "కుక్క"?',
    ta: 'இவற்றில் எது "நாய்"?',
    hi: 'इनमें से कौन सा "कुत्ता" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "cat",
        kn: "ಬೆಕ್ಕು",
        te: "పిల్లి",
        ta: "பூனை",
        hi: "बिल्ली",
      },
      image: "https://www.svgrepo.com/show/454281/cat-halloween-kitty.svg",
    },
    {
      id: 1,
      content: {
        en: "dog",
        kn: "ನಾಯಿ",
        te: "కుక్క",
        ta: "நாய்",
        hi: "कुत्ता",
      },
      image: "https://www.svgrepo.com/show/405227/dog.svg",
    },
    {
      id: 2,
      content: {
        en: "rabbit",
        kn: "ಮೂಲೆಹೋಗು",
        te: "కుందేలు",
        ta: "முயல்",
        hi: "खरगोश",
      },
      image: "https://www.svgrepo.com/show/138773/rabbit.svg",
    },
    {
      id: 3,
      content: {
        en: "horse",
        kn: "ಕುದುರೆ",
        te: "గుర్రం",
        ta: "குதிரை",
        hi: "घोड़ा",
      },
      image: "https://www.svgrepo.com/show/405818/horse.svg",
    },
  ],
  correctWordId: 1,
};
