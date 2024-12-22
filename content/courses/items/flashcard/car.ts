import { FlashCardExercise } from "@/types/course";

export const carFlashCard: FlashCardExercise = {
  id: 4,
  type: "flashCard",
  question: {
    en: 'Which one of these is "car"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ಕಾರ್"?',
    te: 'వీటిలో ఏది "కారు"?',
    ta: 'இவற்றில் எது "கார்"?',
    hi: 'इनमें से कौन सा "कार" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "bicycle",
        kn: "ಸೈಕಲ್",
        te: "సైకిల్",
        ta: "மோடிப்பட்டை",
        hi: "साइकिल",
      },
      image: "https://www.svgrepo.com/show/483105/bicycle.svg",
    },
    {
      id: 1,
      content: {
        en: "car",
        kn: "ಕಾರ್",
        te: "కారు",
        ta: "கார்",
        hi: "कार",
      },
      image: "https://www.svgrepo.com/show/448686/car.svg",
    },
    {
      id: 2,
      content: {
        en: "bus",
        kn: "ಬಸ್",
        te: "బస్సు",
        ta: "பஸ்",
        hi: "बस",
      },
      image: "https://www.svgrepo.com/show/448863/bus.svg",
    },
    {
      id: 3,
      content: {
        en: "train",
        kn: "ರೈಲು",
        te: "రైలు",
        ta: "ரயில்",
        hi: "रेल",
      },
      image: "https://www.svgrepo.com/show/483088/train.svg",
    },
  ],
  correctWordId: 1,
};
