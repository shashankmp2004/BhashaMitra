import { FlashCardExercise } from "@/types/course";

export const elephantFlashCard: FlashCardExercise = {
  id: 5,
  type: "flashCard",
  question: {
    en: 'Which one of these is the largest land animal?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು ಭೂಮಿಯಲ್ಲಿನ ಅತ್ಯಂತ ದೊಡ್ಡ ಪ್ರಾಣಿಯಾಗಿದೆ?',
    te: 'వీటిలో ఏది భూమి పై ఎత్తైన జంతువు?',
    ta: 'இவற்றில் எது நிலத்தின் மிகப் பெரிய உயிரினம்?',
    hi: 'इनमें से कौन सा भूमि पर सबसे बड़ा जीव है?',
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
      image: "https://www.svgrepo.com/show/396923/lion.svg",
    },
    {
      id: 1,
      content: {
        en: "elephant",
        kn: "ಆನೆಯ",
        te: "పిల్లి",
        ta: "யானை",
        hi: "हाथी",
      },
      image: "https://www.svgrepo.com/show/297433/elephant.svg",
    },
    {
      id: 2,
      content: {
        en: "giraffe",
        kn: "ಜಿರಾಫೆ",
        te: "జిరాఫ్",
        ta: "ஜிராப்",
        hi: "जिराफ़",
      },
      image: "https://www.svgrepo.com/show/405198/giraffe.svg",
    },
    {
      id: 3,
      content: {
        en: "hippopotamus",
        kn: "ಹಿಪೋಪೋಟಾಮಸ್",
        te: "హిప్పోపొటమస్",
        ta: "ஹிப்போபொடமஸ்",
        hi: "हिप्पोपोटमस",
      },
      image: "https://www.svgrepo.com/show/405809/hippopotamus.svg",
    },
  ],
  correctWordId: 1,
};
