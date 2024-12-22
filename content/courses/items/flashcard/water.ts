import { FlashCardExercise } from "@/types/course";

export const waterFlashCard: FlashCardExercise = {
  id: 1,
  type: "flashCard",
  question: {
    en: 'Which one of these is "water"?',
    kn: 'ಇವುಗಳಲ್ಲಿ ಯಾವುದು "ನೀರು"?',
    te: 'వీటిలో ఏది "నీరు"?',
    ta: 'இவற்றில் எது "நீர்"?',
    hi: 'इनमें से कौन सा "पानी" है?',
   
  },
  words: [
    {
      id: 0,
      content: {
        en: "tea",
        kn: "ಚಹಾ",
        te: "తేనీరు",
        ta: "தேநீர்",
        hi: "चाय",  
      },
      image: "https://www.svgrepo.com/show/513350/tea.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/tea-kn.mp3"},
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
    },
    {
      id: 1,
      content: {
        en: "water",
        kn: "ನೀರು",
        te: "నీరు",
        ta: "தண்ணீர்",
        hi: "पानी",
      },
      image: "https://www.svgrepo.com/show/467448/water.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/water-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
    },
    {
      id: 2,
      content: {
        en: "sushi",
        kn: "ಸುಶಿ",
        te: "సుషీ",
        ta: "சுஷி",
        hi: "सुशी",
        
      },
      image: "https://www.svgrepo.com/show/505198/sushi.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/sushi-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
    },
    {
      id: 3,
      content: {
        en: "rice",
        kn: "ಅನ್ನ",
        te: "బియ్యం",
        ta: "அரிசி",
        hi: "चावल",
        
      },
      image: "https://www.svgrepo.com/show/505200/rice.svg",
      audio: {
        en: { uri: "https://example.com/audio/tea.mp3" },
        kn: { uri: "assets/audios/course/files/rice-kn.mp3" },
        te: { uri: "https://example.com/audio/tea_te.mp3" },
        ta: { uri: "https://example.com/audio/tea_ta.mp3" },
        hi: { uri: "https://example.com/audio/tea_hi.mp3" },
      },
    },
  ],
  correctWordId: 1,
};
