import { Lesson } from "@/types/course";

import { exerciseOne } from "./exercises/1";
import { exerciseTwo } from "./exercises/2";

export const lessonFour: Lesson = {
  id: 1,
  description: {
    en: "Order food",
    kn: "ಆಹಾರವನ್ನು ಆರ್ಡರ್ ಮಾಡಿ",
    te: "ఆహారం ఆర్డర్ చేయండి",
    ta: "உணவை ஆர்டர் செய்யுங்கள்", 
    hi: "भोजन का आदेश करें",
   
  },
  exercises: [exerciseOne, exerciseTwo],
};
