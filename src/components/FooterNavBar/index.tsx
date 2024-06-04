






import { StackTypes } from "../../routes/stack";
import { android } from "..";
import * as Style from "./styles";

//#region React and Expo
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
//#endregion

//#region External Libraries
import { useNavigation } from "@react-navigation/native";
//#endregion

//#region Svg
import { SvgCss } from "react-native-svg";
import { eventsPage, searchPage, myTicketsPage, profilePage } from "../../assets/svg";
//#endregion

export const FooterNavBar = () => {
  const gradient = ["#FFF6B7", "#FBA395", "#F6416C"]
  const [visibleEventsPage, setVisibleEventsPage] = useState<boolean>(true);
  const [visibleSearchPage, setVisibleSearchPage] = useState<boolean>(false);
  const [visibleMyTicketsPage, setVisibleMyTicketsPage] = useState<boolean>(false);
  const [visibleProfilePage, setVisibleProfilePage] = useState<boolean>(false);

  const navigation = useNavigation<StackTypes>();
  
  return (
    <>
      <View style={Style.elipse1} />
      <LinearGradient colors={gradient} style={Style.elipse2} start={{ x: 0.0, y: 0.8 }} end={{ x: 1, y: 0.6 }} />
      <Style.BottomNavBarTitle style={{ textShadowColor: "rgba(0, 0, 0, 0.3)", textShadowOffset: {width: 0, height: 2}, textShadowRadius: 5, top: android ? 35 : 25}}>Eventos</Style.BottomNavBarTitle>
      <Style.SVGsContainer style={{bottom: android ? 45 : 53}}>
        <Style.BottomNavBarButton style={{ top: 7, backgroundColor: visibleEventsPage ? "#F2662720" : undefined, transform: [{ rotate: '-4deg' }] }} activeOpacity={0.8} onPress={() => { setVisibleEventsPage(true); setVisibleSearchPage(false); setVisibleMyTicketsPage(false); setVisibleProfilePage(false)}}>
          <SvgCss xml={eventsPage} />
        </Style.BottomNavBarButton>
        <Style.BottomNavBarButton style={{ backgroundColor: visibleSearchPage ? "#F2662720" : undefined }} activeOpacity={0.8} onPress={() => {setVisibleEventsPage(false); setVisibleSearchPage(true); setVisibleMyTicketsPage(false); setVisibleProfilePage(false)}}>
          <SvgCss xml={searchPage} />
        </Style.BottomNavBarButton>
        <Style.BottomNavBarButton style={{ backgroundColor: visibleMyTicketsPage ? "#F2662720" : undefined }} activeOpacity={0.8} onPress={() => {setVisibleEventsPage(false); setVisibleSearchPage(false); setVisibleMyTicketsPage(true); setVisibleProfilePage(false)}}>
          <SvgCss xml={myTicketsPage} />
        </Style.BottomNavBarButton>
        <Style.BottomNavBarButton style={{ top: 6, backgroundColor: visibleProfilePage ? "#F2662720" : undefined, transform: [{ rotate: '4deg' }] }} activeOpacity={0.8} onPress={() => {setVisibleEventsPage(false); setVisibleSearchPage(false); setVisibleMyTicketsPage(false); setVisibleProfilePage(true)}}>
          <SvgCss xml={profilePage} />
        </Style.BottomNavBarButton>
      </Style.SVGsContainer>
    </>
  );
};