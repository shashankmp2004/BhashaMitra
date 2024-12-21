import { TranslateExercise } from "@/types/course";

export const needHelpTranslate: TranslateExercise = {
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
      en: "I need help",
      kn: "ನನಗೆ ಸಹಾಯ ಬೇಕು",
      te: "నాకు సహాయం అవసరం",
      ta: "எனக்கு உதவி தேவை",
      hi: "मुझे मदद चाहिए",
    },
  },
  options: [
    {
      id: 0,
      word: {
        content: {
          en: "help",
          kn: "ಸಹಾಯ",
          te: "సహాయం",
          ta: "உதவி",
          hi: "मदद",
        },
      },
    },
    {
      id: 1,
      word: {
        content: {
          en: "need",
          kn: "ಬೇಡಿದೆ",
          te: "అవసరం",
          ta: "தேவை",
          hi: "चाहिए",
        },
      },
    },
    {
      id: 2,
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
    {
      id: 3,
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
  ],
  correctOrderIds: {
    en: [3, 1, 0],
    kn: [3, 1, 0],
    te: [3, 1, 0],
    ta: [3, 1, 0],
    hi: [3, 1, 0],
  },
};
