import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Welcome, Circle } from "../../Animations";

interface Props {
  setSplashScreen: Dispatch<SetStateAction<boolean>>
}

export const Splash = (props: Props) => {
  const [animationText, setAnimationText] = useState<boolean>(false);
  const [animationCircle, setAnimationCircle] = useState<boolean>(false);
  const gradient = ["#FFF6B7", "#FBA395", "#F6416C"]

  function AnimateText() {
    setAnimationText(true);
  }

  function AnimateCircle() {
    setAnimationText(false);
    setAnimationCircle(true);
  }

  useEffect(() => {
    setTimeout(AnimateText, 200);
    setTimeout(AnimateCircle, 3600);
  }, []);

  return (
    <LinearGradient
      colors={gradient}
      style={{
        height: "100%",
        width: "100%", 
        justifyContent: "center",
        alignItems: "center",
      }}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 1, y: 0.95 }}
    >
      {animationText && <Welcome />}
      {animationCircle && <Circle setSplashScreen={props.setSplashScreen} />}
    </LinearGradient>
  );
};
