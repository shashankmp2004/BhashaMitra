import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "coderit_km",
  description: "rit...",
  slug: "coderit_km",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/mascot.svg",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#DFEBF7",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#DFEBF7",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "favicon.ico",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  owner: "@anandprafull",
};

export default config;
