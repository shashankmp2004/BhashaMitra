import { SiteConfig } from "@/types";

const ASSETS_URL =
  "https://raw.githubusercontent.com/anandprafull/coderit_kn/main/assets";

export const siteConfig: SiteConfig = {
  name: "coderit_km",
  title: "coderit_km",
  description: "",
  url: " http://localhost:8081",
  author: {
    name: "Prafull Anand",
    username: "@anandprafull",
    url: "https://github.com/anandprafull",
  },
  ogImage: `${ASSETS_URL}/public/og.png`,
  appleTouchIcon: `${ASSETS_URL}/public/apple-touch-icon.png`,
  icon16x16: `${ASSETS_URL}/public/favicon-16x16.png`,
  icon32x32: `${ASSETS_URL}/public/favicon-32x32.png`,
  manifest: `${ASSETS_URL}/public/site.webmanifest`,
};
