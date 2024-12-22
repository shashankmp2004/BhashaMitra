import { FlashCardExercise } from "@/types/course";

export const sunFlashCard: FlashCardExercise = {
  id: 4,
  type: "flashCard",
  question: {
    en: 'Which one of these is "sun"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ಸೂರ್ಯ"?',
    te: 'వీటిలో ఏది "సూర్య"?',
    ta: 'இவற்றில் எது "சூரியன்"?',
    hi: 'इनमें से कौन सा "सूरज" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "moon",
        kn: "ಚಂದ್ರ",
        te: "చంద్ర",
        ta: "சந்திரன்",
        hi: "चाँद",
      },
      image: "https://www.svgrepo.com/show/484307/moon.svg",
    },
    {
      id: 1,
      content: {
        en: "sun",
        kn: "ಸೂರ್ಯ",
        te: "సూర్య",
        ta: "சூரியன்",
        hi: "सूरज",
      },
      image: "https://www.svgrepo.com/show/434342/sun.svg",
    },
    {
      id: 2,
      content: {
        en: "star",
        kn: "ನಕ್ಷತ್ರ",
        te: "తార",
        ta: "நட்சத்திரம்",
        hi: "तारा",
      },
      image: "https://www.svgrepo.com/show/513354/star.svg",
    },
    {
      id: 3,
      content: {
        en: "cloud",
        kn: "ಮೂಡಲ",
        te: "మేఘం",
        ta: "மேகம்",
        hi: "बादल",
      },
      image: "https://www.svgrepo.com/show/513285/cloud.svg",
    },
  ],
  correctWordId: 1,
};
