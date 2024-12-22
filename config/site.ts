import { SiteConfig } from "@/types";

const ASSETS_URL =
  "https://github.com/Minions-Whackiest/BhashaMitra/blob/main/assets";

export const siteConfig: SiteConfig = {
  name: "BhashaMitra",
  title: "BhashaMitra",
  description: "",
  url: " http://localhost:8081",
  author: {
    name: "Prafull Anand",
    username: "@anandprafull",
    url: "https://github.com/anandprafull",
  },
  ogImage: `https://github.com/Minions-Whackiest/BhashaMitra/blob/main/assets/images/mascot.svg`,
  appleTouchIcon: `${ASSETS_URL}/public/apple-touch-icon.png`,
  icon16x16: `favicon.ico`,
  icon32x32: `favicon.ico`,
  manifest: `favicon.ico`,
};
