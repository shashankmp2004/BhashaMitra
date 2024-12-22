import { Lesson } from "@/types/course";

import { exerciseThree } from "./exercises/1";
import { exerciseFour } from "./exercises/2";

export const lessonThree: Lesson = {
  id: 2,
  description: {
    en: "Lesson 3",
    kn: "ಆಹಾರವನ್ನು ಆರ್ಡರ್ ಮಾಡಿ",
    te: "ఆహారం ఆర్డర్ చేయండి",
    ta: "உணவை ஆர்டர் செய்யுங்கள்", 
    hi: "भोजन का आदेश करें",
   
  },
  exercises: [exerciseThree, exerciseFour],
};
