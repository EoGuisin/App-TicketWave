import { StackComponent } from "./src/routes/stack";
import { Font } from "./src/assets/fonts";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  Font();
  return (
    <>
      <StatusBar style="dark" />
      <StackComponent />
    </>
  );
}
