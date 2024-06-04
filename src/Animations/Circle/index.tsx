import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

//#region External Libraries
import { Animated } from "react-native";
//#endregion
interface Props {
  setSplashScreen: Dispatch<SetStateAction<boolean>>;
}
export function Circle(props: Props) {
  const [width] = useState(new Animated.Value(0.1));
  const [height] = useState(new Animated.Value(0.1));

  function Animation() {
    Animated.timing(width, {
      toValue: 3000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: 3000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    Animation();
  }, []);

  setTimeout(() => {
    props.setSplashScreen(false);
  }, 700);

  return (
    <Animated.View
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 1000,
      }}
    />
  );
}
