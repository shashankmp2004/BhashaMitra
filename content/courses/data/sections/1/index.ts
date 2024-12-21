import { Section } from "@/types/course";

import { chapterOne } from "./chapters/1";

export const sectionOne: Section = {
  id: 1,
  title: {
    en: "Section 1: Rookie",
    kn: "ವಿಭಾಗ 1: ಆರಂಭಿಗ",
    te: "విభాగం 1: రూకీ",
    ta: "பிரிவு 1: புதுமுகம்",  
    hi: "धारा 1: नौसिखिया",
    
  },
  chapters: [chapterOne],
};
