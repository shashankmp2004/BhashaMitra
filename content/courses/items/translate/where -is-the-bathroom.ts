import { TranslateExercise } from "@/types/course";

export const whereIsBathroomTranslate: TranslateExercise = {
  id: 3,
  type: "translate",
  question: {
    en: "Translate this sentence",
    kn: "ಈ ವಾಕ್ಯವನ್ನು ಅನುವಾದಿಸಿ",
    te: "ఈ వాక్యాన్ని అనువదించండి",
    ta: "இந்த வாக்கியத்தை மொழிபெயர்க்கவும்",
    hi: "इस वाक्य का अनुवाद करें",
  },
  sentence: {
    content: {
      en: "Where is the bathroom?",
      kn: "ಬಾತ್ ರೂಮು ಎಲ್ಲಿ ಇದೆ?",
      te: "బాత్‌రూమ్ ఎక్కడ ఉంది?",
      ta: "குளியலறை எங்கு உள்ளது?",
      hi: "बाथरूम कहाँ है?",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "bathroom",
          kn: "ಬಾತ್ ರೂಮು",
          te: "బాత్‌రూమ్",
          ta: "குளியலறை",
          hi: "बाथरूम",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "where",
          kn: "ಎಲ್ಲಿ",
          te: "ఎక్కడ",
          ta: "எங்கு",
          hi: "कहाँ",
        },
      },
    },
    {
      id: 2,
      word: {
        content: {
          en: "is",
          kn: "ಇದು",
          te: "ఉంది",
          ta: "உள்ளது",
          hi: "है",
        },
      },
    },
    {
      id: 3,
      word: {
        content: {
          en: "you",
          kn: "ನೀವು",
          te: "మీరు",
          ta: "நீங்கள்",
          hi: "आप",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [1, 2, 0],
    kn: [1, 2, 0],
    te: [1, 2, 0],
    ta: [1, 2, 0],
    hi: [1, 2, 0],
  },
};
