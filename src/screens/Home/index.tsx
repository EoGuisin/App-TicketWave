import { StackTypes } from "../../routes/stack";
import { Splash, windowWidth, windowHeight, FooterNavBar, EventCard } from "../../components";
import * as Style from "./styles";
import { EventInformation } from "../Modals";

//#region Services
import * as Request from '../../Services/Controllers';
import * as Objects from '../../Services/Interfaces';
//#endregion

//#region React
import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
//#endregion

//#region External Libraries
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
//#endregion

//#region Svg
import { SvgCss } from "react-native-svg";
import { iconBall } from "../../assets/svg";
//#endregion

export const Home = () => {
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  const [viewEventInformationModal, setViewEventInformationModal] = useState<boolean>(false);
  const [events, setEvents] = useState<Objects.Events[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Objects.Events | undefined>();

  const navigation = useNavigation<StackTypes>();

  async function GetEvents() {
    try {
      let Response = await Request.Events.Get();
      console.log("Response: ", Response)
      setEvents(Response.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if(splashScreen) GetEvents();
  }, []);
  
  return (
    <Style.Container>
      {splashScreen && <Splash setSplashScreen={setSplashScreen} />}
      {!splashScreen && (
        <Animatable.View style={{ backgroundColor: 'white', alignItems: "center", width: windowWidth, height: windowHeight, justifyContent: "flex-end", position: "absolute", bottom: 0 }} animation={"fadeInUp"}>
          <Style.Wrapper>
            <ScrollView>
              <View style={{marginBottom: 200}}>
                <Style.Header>
                  <View style={{ width: 48, height: 52}} />
                  <Style.NameUser>Bom dia, Guilherme!</Style.NameUser>
                  <SvgCss xml={iconBall} />
                </Style.Header>
                {/* <Style.Title>Destaque</Style.Title> */}
                <View style={{ gap: 20, flexDirection: "column" }}>
                  <Style.Title style={{ textAlign: "left", paddingHorizontal: 10 }}>Eventos</Style.Title>
                  {events.map((item, index) => <EventCard key={index} item={item} onPress={() => {setSelectedEvent(item); setViewEventInformationModal(true)}} />)}
                  <EventInformation selectedEvent={selectedEvent} visible={viewEventInformationModal} closeModal={() => setViewEventInformationModal(false)} />
                </View>
              </View>
            </ScrollView>
          </Style.Wrapper>
          <FooterNavBar />
        </Animatable.View>
      )}
    </Style.Container>
  );
};