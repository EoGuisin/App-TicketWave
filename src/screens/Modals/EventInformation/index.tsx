//#region React
import React, { useState } from "react";
import { Image, Modal, SafeAreaView, ScrollView, View, Linking, Alert, TouchableOpacity } from "react-native";
//#endregion

//#region Services
import * as Objects from '../../../Services/Interfaces';
//#endregion

import * as Style from "./styles";
import { HeaderModal, windowWidth, windowHeight } from "../../../components";
import { Checkout } from "../";

//#region MapView
import MapView, { Marker } from 'react-native-maps';
//#endregion

import moment from "moment";
moment.locale("pt-br");

interface Props {
  visible: boolean;
  closeModal: () => void;
  selectedEvent: Objects.Events | undefined;
}

export const EventInformation = (props: Props) => {
  const [viewCheckoutModal, setViewCheckoutModal] = useState<boolean>(false);

  const region = {
    latitude: props.selectedEvent ? props.selectedEvent?.map[0] : 0,
    longitude: props.selectedEvent ? props.selectedEvent?.map[1] : 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.001,
  };

  function MapLink() {
    Alert.alert('Escolha onde deseja abrir a localização!', '', [
      { text: 'Google Maps', onPress: () => Linking.openURL(`https://www.google.com/maps/@${props.selectedEvent?.map[0]},${props.selectedEvent?.map[1]},17z`) },
      { text: 'Waze', onPress: () => Linking.openURL(`https://www.waze.com/ul?ll=${props.selectedEvent?.map[0]}%2C${props.selectedEvent?.map[1]}&navigate=yes&zoom=17`) },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }

  
  return (
    <Modal animationType="slide" transparent={false} visible={props.visible}>
      <SafeAreaView>
        <HeaderModal closeModal={props.closeModal} title={props.selectedEvent?.name} />
        <Style.Wrapper>
          <Style.DateTitle>{moment(props.selectedEvent?.date).format("DD MMM YYYY").toUpperCase()}</Style.DateTitle>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: windowHeight / 4}}>
              <Image source={require('../../../assets/svg/ImgTest.png')} style={{borderRadius: 22, width: windowWidth / 1.05, height: 150, alignSelf: "center" }} />
              <Style.InformationContainer>
                <Style.InformationTitle>Localização</Style.InformationTitle>
                <TouchableOpacity activeOpacity={1} onPress={() => MapLink()}>
                <Style.InformationDescription style={{color: "#D6244E"}}>{props.selectedEvent?.address.publicPlace}, {props.selectedEvent?.address.neighborhood}, {props.selectedEvent?.address.cep}</Style.InformationDescription>
                  <MapView
                    style={{borderRadius: 22, width: windowWidth / 1.1, height: 150, alignSelf: "center" }}
                    region={region} zoomEnabled={false} scrollEnabled={false}
                  >
                    <Marker coordinate={region} />
                  </MapView>
                </TouchableOpacity>
                <Style.InformationDescription style={{alignSelf: "flex-end"}}>{props.selectedEvent?.address.locality}, {props.selectedEvent?.address.uf}</Style.InformationDescription>
                <Style.InformationTitle>Artistas</Style.InformationTitle>
                <Style.InformationDescription>Justin Bieber</Style.InformationDescription>
                <Style.InformationTitle>Classicação</Style.InformationTitle>
                <Style.InformationDescription>Acima de 18 anos</Style.InformationDescription>
                <Style.InformationTitle>Informações</Style.InformationTitle>
                <Style.InformationDescription>{props.selectedEvent?.description}</Style.InformationDescription>
              </Style.InformationContainer>
            </View>
          </ScrollView>
        </Style.Wrapper>
      </SafeAreaView>
      <Checkout selectedEvent={props.selectedEvent} visible={viewCheckoutModal} closeModal={() => setViewCheckoutModal(false)} />
      <Style.Button activeOpacity={0.9} onPress={() => setViewCheckoutModal(true)}>
        <Style.ButtonText>Checkout</Style.ButtonText>
      </Style.Button>
    </Modal>
  );
};
