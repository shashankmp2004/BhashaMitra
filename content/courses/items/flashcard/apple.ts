import { FlashCardExercise } from "@/types/course";

export const appleFlashCard: FlashCardExercise = {
  id: 2,
  type: "flashCard",
  question: {
    en: 'Which one of these is "apple"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ಸೆಬು"?',
    te: 'వీటిలో ఏది "ఆపిల్"?',
    ta: 'இவற்றில் எது "ஆப்பிள்"?',
    hi: 'इनमें से कौन सा "सेब" है?',
  },
  words: [
    {
      id: 0,
      content: {
        en: "banana",
        kn: "ಬಾಳೆಹಣ್ಣು",
        te: "అరటి",
        ta: "வாழைப்பழம்",
        hi: "केला",
      },
      image: "https://www.svgrepo.com/show/397813/banana.svg",
    },
    {
      id: 1,
      content: {
        en: "apple",
        kn: "ಸೆಬು",
        te: "ఆపిల్",
        ta: "ஆப்பிள்",
        hi: "सेब",
      },
      image: "https://www.svgrepo.com/show/303275/apple-fruit.svg",
    },
    {
      id: 2,
      content: {
        en: "grapes",
        kn: "ದ್ರಾಕ್ಷಿ",
        te: "ద్రాక్ష",
        ta: "திராட்சை",
        hi: "अंगूर",
      },
      image: "https://www.svgrepo.com/show/356134/grapes.svg",
    },
    {
      id: 3,
      content: {
        en: "mango",
        kn: "ಮಾವಿನಹಣ್ಣು",
        te: "మామిడిపండు",
        ta: "மாம்பழம்",
        hi: "आम",
      },
      image: "https://www.svgrepo.com/show/353420/mango.svg",
    },
  ],
  correctWordId: 1,
};
