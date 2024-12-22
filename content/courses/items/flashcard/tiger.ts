import { FlashCardExercise } from "@/types/course";

export const tigerFlashCard: FlashCardExercise = {
  id: 6,
  type: "flashCard",
  question: {
    en: 'Which one of these is "tiger"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ಹುಲಿ"?',
    te: 'వీటిలో ఏది "పులి"?',
    ta: 'இவற்றில் எது "புலி"?',
    hi: 'इनमें से कौन सा "बाघ" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "lion",
        kn: "ಸಿಂಹ",
        te: "సింహం",
        ta: "சிங்கம்",
        hi: "सिंह",
      },
      image: "https://www.svgrepo.com/show/12624/lion.svg",
    },
    {
      id: 1,
      content: {
        en: "cheetah",
        kn: "ಚೀರಾಫ್",
        te: "చీరత",
        ta: "சீட்டா",
        hi: "चीताह",
      },
      image: "https://www.svgrepo.com/show/10884/cheetah.svg",
    },
    {
      id: 2,
      content: {
        en: "tiger",
        kn: "ಹುಲಿ",
        te: "పులి",
        ta: "புலி",
        hi: "बाघ",
      },
      image: "https://www.svgrepo.com/show/375945/tiger.svg",
    },
    {
      id: 3,
      content: {
        en: "leopard",
        kn: "ಚಿರತೆ",
        te: "చిరుత",
        ta: "சிறுத்தை",
        hi: "तेंदुआ",
      },
      image: "https://www.svgrepo.com/show/11051/leopard.svg",
    },
  ],
  correctWordId: 2,
};
