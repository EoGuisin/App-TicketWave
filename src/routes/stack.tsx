import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Profile: undefined;
  Welcome: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: "fade"}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
