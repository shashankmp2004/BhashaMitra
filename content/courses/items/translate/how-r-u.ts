import { TranslateExercise } from "@/types/course";

export const howAreYouTranslate: TranslateExercise = {
  id: 1,
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
      en: "How are you?",
      kn: "ನೀವು ಹೇಗಿದ್ದೀರಿ?",
      te: "మీరు ఎలా ఉన్నారు?",
      ta: "நீங்கள் எப்படி இருக்கிறீர்கள்?",
      hi: "आप कैसे हैं?",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "hello",
          kn: "ಹಲೋ",
          te: "హలో",
          ta: "ஹலோ",
          hi: "नमस्ते",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "how",
          kn: "ಹೇಗೆ",
          te: "ఎలా",
          ta: "எப்படி",
          hi: "कैसे",
        },
      },
    },
    {
      id: 2,
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
    {
      id: 3,
      word: {
        content: {
          en: "are",
          kn: "ಇರುತ್ತೀರಿ",
          te: "ఉన్నారు",
          ta: "இருக்கிறீர்கள்",
          hi: "हैं",
        },
      },
    },
  ],
  correctOrderIds: {
    en: [1, 2, 3],
    kn: [1, 2, 3],
    te: [1, 2, 3],
    ta: [1, 2, 3],
    hi: [1, 2, 3],
  },
};
