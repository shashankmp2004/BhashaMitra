import { TranslateExercise } from "@/types/course";

export const sushiPleaseTranslate: TranslateExercise = {
  id: 0,
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
      en: "Sushi, please",
      kn: "ಸುಶಿ ದಯವಿಟ್ಟು",
      te: "సుషీ దయచేసి",
      ta: "சுஷி, தயவு செய்து",
      hi: "सुशी, कृपया",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "tea",
          kn: "ಚಹಾ",
          te: "టీ",
          ta: "தேநீர்",
          hi: "चाय",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "sushi",
          kn: "ಸುಶಿ",
          te: "సుషీ",
          ta: "சுஷி",
          hi: "सुशी",
        },
      },
    },
    {
      id: 2,
      word: {
        content: {
          en: "please",
          kn: "ದಯವಿಟ್ಟು",
          te: "దయచేసి",
          ta: "தயவு செய்து",
          hi: "कृपया",
        },
      },
    },
    {
      id: 3,
      word: {
        content: {
          en: "water",
          kn: "ನೀರು",
          te: "నీరు",
          ta: "தண்ணீர்",
          hi: "पानी",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [1, 2],
    kn: [1, 2],
    te: [2, 1],
    ta: [1, 2],
    hi: [1, 2],
  },
};
