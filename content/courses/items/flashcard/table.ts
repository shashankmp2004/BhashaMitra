import { FlashCardExercise } from "@/types/course";

export const tableFlashCard: FlashCardExercise = {
  id: 8,
  type: "flashCard",
  question: {
    en: 'Which one of these is "table"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ಮೇಜು"?',
    te: 'వీటిలో ఏది "మేక"?',
    ta: 'இவற்றில் எது "மேசை"?',
    hi: 'इनमें से कौन सा "मेज़" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "chair",
        kn: "ಕುರ்சಿ",
        te: "కుర్చి",
        ta: "நாற்காலி",
        hi: "कुर्सी",
      },
      image: "https://www.svgrepo.com/show/108438/chair.svg",
    },
    {
      id: 1,
      content: {
        en: "table",
        kn: "ಮೇಜು",
        te: "మేక",
        ta: "மேசை",
        hi: "मेज़",
      },
      image: "https://www.svgrepo.com/show/15209/table.svg",
    },
    {
      id: 2,
      content: {
        en: "sofa",
        kn: "ಸೋಫಾ",
        te: "సోఫా",
        ta: "சோபா",
        hi: "सोफा",
      },
      image: "https://www.svgrepo.com/show/17699/sofa.svg",
    },
    {
      id: 3,
      content: {
        en: "lamp",
        kn: "ಲೇಂಪ್",
        te: "లాంప్",
        ta: "அந்தாரம்",
        hi: "लैंप",
      },
      image: "https://www.svgrepo.com/show/15617/lamp.svg",
    },
  ],
  correctWordId: 1,
};
