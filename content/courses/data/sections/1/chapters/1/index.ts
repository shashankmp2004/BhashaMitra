import { Chapter } from "@/types/course";

import { lessonOne } from "./lessons/1";

export const chapterOne: Chapter = {
  id: 1,
  title: {
    en: "Unit 1",
    kn: "ಘಟಕ 1",
    te: "యూనిట్ 1",
    ta: "அலகு 1",
    hi: "यूनिट 1",
   
  },
  description: {
    en: "Order food, describe people",
    kn: "ಆಹಾರವನ್ನು ಆರ್ಡರ್ ಮಾಡಿ, ಜನರನ್ನು ವಿವರಿಸಿ",
    te: "ఆహారాన్ని ఆర్డర్ చేయండి, వ్యక్తులను వివరించండి",
    ta: "உணவை ஆர்டர் செய்யுங்கள், மக்களை விவரிக்கவும்",
    hi: "खाना ऑर्डर करें, लोगों का वर्णन करें",
    
  },
  lessons: [lessonOne, lessonOne, lessonOne, lessonOne, lessonOne],
};
