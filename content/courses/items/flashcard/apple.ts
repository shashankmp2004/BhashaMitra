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
      image: "https://www.svgrepo.com/show/475237/banana.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/banana-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
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
      image: "https://www.svgrepo.com/show/530203/apple.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/apple-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
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
      image: "https://www.svgrepo.com/show/400291/grapes.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/grapes-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
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
      image: "https://www.svgrepo.com/show/397130/mango.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/mango-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
      
    },
  ],
  correctWordId: 1,
};
