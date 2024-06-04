//#region React
import React from "react";
import { Image, Modal, SafeAreaView, ScrollView, View, Linking, Alert, TouchableOpacity } from "react-native";
//#endregion

//#region Services
import * as Objects from '../../../Services/Interfaces';
//#endregion

import * as Style from "./styles";
import { HeaderModal, windowWidth, windowHeight } from "../../../components";

import moment from "moment";
import { SvgCss } from "react-native-svg";
import { arrowDown, More, Less } from "../../../assets/svg";
moment.locale("pt-br");

interface Props {
  visible: boolean;
  closeModal: () => void;
  selectedEvent: Objects.Events | undefined;
}

export const Checkout = (props: Props) => {
  return (
    <Modal animationType="slide" transparent={false} visible={props.visible}>
      <SafeAreaView>
        <HeaderModal closeModal={props.closeModal} title="Comprar Ticket" />
        <Style.Wrapper>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: windowHeight / 4}}>
              <Style.TitleButton>Areas</Style.TitleButton>
              <Style.MultipleChoicedButton activeOpacity={0.9}>
                <View style={{width: 20, height: 10}} />
                <Style.SelectedChoice>Individual</Style.SelectedChoice>
                <SvgCss xml={arrowDown} />
              </Style.MultipleChoicedButton>

              <Style.AreasContainer>
                
                <Style.AreaHeader>
                  <Style.AreaTitle>Masculino</Style.AreaTitle>
                  <Style.AreaPrice>R$ 80,00</Style.AreaPrice>
                </Style.AreaHeader>
                <Style.AreaNumberLot>1° Lote</Style.AreaNumberLot>
                <Style.AreaMoreLess>
                  <Style.Circle activeOpacity={0.9}>
                    <SvgCss xml={Less} />
                  </Style.Circle>
                  <Style.NumberOfTickets>1</Style.NumberOfTickets>
                  <Style.Circle activeOpacity={0.9}>
                    <SvgCss xml={More} />
                  </Style.Circle>
                </Style.AreaMoreLess>
                <Style.AreaSeparate />
                <Style.AreaHeader>
                  <Style.AreaTitle>Feminino</Style.AreaTitle>
                  <Style.AreaPrice>R$ 70,00</Style.AreaPrice>
                </Style.AreaHeader>
                <Style.AreaNumberLot>1° Lote</Style.AreaNumberLot>
                <Style.AreaMoreLess>
                  <Style.Circle activeOpacity={0.9}>
                    <SvgCss xml={Less} />
                  </Style.Circle>
                  <Style.NumberOfTickets>1</Style.NumberOfTickets>
                  <Style.Circle activeOpacity={0.9}>
                    <SvgCss xml={More} />
                  </Style.Circle>
                </Style.AreaMoreLess>
              </Style.AreasContainer>

              <Style.TitleButton>Forma de Pagamento</Style.TitleButton>
              <Style.MultipleChoicedButton activeOpacity={0.9}>
                <View style={{width: 20, height: 10}} />
                <Style.SelectedChoice>Pix</Style.SelectedChoice>
                <SvgCss xml={arrowDown} />
              </Style.MultipleChoicedButton>
            </View>
          </ScrollView>
        </Style.Wrapper>
      </SafeAreaView>
      <Style.Button activeOpacity={0.9}>
        <Style.ButtonText>Pagamento</Style.ButtonText>
      </Style.Button>
    </Modal>
  );
};
