import { sunFlashCard } from "@/content/courses/items/flashcard/sun";
import { howAreYouTranslate } from "@/content/courses/items/translate/how-r-u";

import { ExerciseSet } from "@/types/course";

export const exerciseThree: ExerciseSet = {
  id: 1,
  xp: 10,
  difficulty: "easy",
  items: [howAreYouTranslate, sunFlashCard],
};

