import { TranslateExercise } from "@/types/course";

export const iAmHungryTranslate: TranslateExercise = {
  id: 2,
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
      en: "I am hungry",
      kn: "ನಾನು ಹಸಿವಾಗಿದ್ದೇನೆ",
      te: "నేను బొక్కైనాను",
      ta: "நான் பசிக்குள்ளேன்",
      hi: "मैं भूखा हूँ",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "I",
          kn: "ನಾನು",
          te: "నేను",
          ta: "நான்",
          hi: "मैं",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "am",
          kn: "ಆಗಿದ್ದೇನೆ",
          te: "ఉన్నాను",
          ta: "இருக்கிறேன்",
          hi: "हूँ",
        },
      },
    },
    {
      id: 2,
      word: {
        content: {
          en: "hungry",
          kn: "ಹಸಿವಾಗಿದ್ದೇನೆ",
          te: "బొక్కైనాను",
          ta: "பசிக்குள்ளேன்",
          hi: "भूखा",
        },
      },
    },
    {
      id: 3,
      word: {
        content: {
          en: "full",
          kn: "ಪೂರ್ಣ",
          te: "పూర్తిగా",
          ta: "பூர்த்தி",
          hi: "पूरा",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [0, 1, 2],
    kn: [0, 1, 2],
    te: [0, 1, 2],
    ta: [0, 1, 2],
    hi: [0, 1, 2],
  },
};
