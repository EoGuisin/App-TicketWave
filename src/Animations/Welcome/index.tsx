import React, {useEffect, useState} from 'react';
import * as Style from './styles';

//#region External Libraries
import * as Animatable from 'react-native-animatable';
//#endregion

export function Welcome() {
  const [endAnimation, setEndAnimation] = useState<boolean>(false);

  function NextScreen() {
    setEndAnimation(true);
  }

  useEffect(() => {
    setTimeout(NextScreen, 2500);
  }, []);

  return (
    <Style.Container>
      <Animatable.Text animation={endAnimation ?  'fadeOutRightBig' : 'fadeInLeftBig'} style={Style.textTicket}>TICKET</Animatable.Text>
      <Animatable.Text animation={endAnimation ?  'fadeOutLeftBig' : 'fadeInRightBig'} style={Style.textWave}>WAVE</Animatable.Text>
    </Style.Container>
  );
};
