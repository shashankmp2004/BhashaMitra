import { Languages, SupportedLanguageCode } from "@/types";

export const languages = {
  en: {
    name: "English",
    flag: "https://www.svgrepo.com/show/405645/flag-for-flag-united-states.svg",
  },
  kn: {
    name: "ಕನ್ನಡ",
    flag: "https://i.imgur.com/43qnu41.png",
  },
  
  te: {
    name: "తెలుగు",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Flag_of_Telangana.svg/2560px-Flag_of_Telangana.svg.png",
  },
  ta: {
    name: "தமிழ்",
    flag: "https://i.redd.it/frd7tnq08f681.png",
  },
  hi: {
    name: "हिंदी",
    flag: "https://www.svgrepo.com/show/405510/flag-for-flag-india.svg",
  },
} satisfies Languages;

export function getLanguage(code: SupportedLanguageCode) {
  return languages[code];
}

export const validLanguages: SupportedLanguageCode[] = Object.keys(
  languages
).map((key) => key as SupportedLanguageCode);
