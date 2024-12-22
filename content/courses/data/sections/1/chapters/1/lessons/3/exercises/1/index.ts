import { elephantFlashCard } from "@/content/courses/items/flashcard/animal";
import { needHelpTranslate } from "@/content/courses/items/translate/help-please";
import { ExerciseSet } from "@/types/course";

export const exerciseThree: ExerciseSet = {
  id: 1,
  xp: 10,
  difficulty: "easy",
  items: [needHelpTranslate, elephantFlashCard],
};

