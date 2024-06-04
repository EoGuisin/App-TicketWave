import { useCallback } from "react";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";

export function Font() {
  
  const [fontsLoaded] = useFonts({
    "Montserrat-ExtraBold": require("./Montserrat-ExtraBold.ttf"),
    "Montserrat-Bold": require("./Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./Montserrat-Medium.ttf"),
    "Montserrat-ExtraLight": require("./Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("./Montserrat-Light.ttf"),
    "Montserrat-Black": require("./Montserrat-Black.ttf"),
    "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
    "Montserrat-Thin": require("./Montserrat-Thin.ttf"),
  });
  useCallback(async () => {
    if (fontsLoaded) await hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
}