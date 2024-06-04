import * as Style from "./styles";
import * as Objects from "../../Services/Interfaces";
import moment from "moment";
moment.locale("pt-br");

//#region React
import React from "react";
import { View } from "react-native";
//#endregion

interface Props {
  onPress: () => void;
  item: Objects.Events;
}

export const EventCard = (props: Props) => {
  return (
    <Style.Events>
      <Style.Card onPress={props.onPress} activeOpacity={0.9}>
        <Style.Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/100172433?v=4",
          }}
        />
        <Style.Infos>
          <Style.InfoHeader>
            <Style.EventTitle>{props.item.name}</Style.EventTitle>
            <Style.EventDate>
              {moment(props.item.date).format("DD MMM YYYY").toUpperCase()}
            </Style.EventDate>
          </Style.InfoHeader>
          <View>
            <Style.EventLocation>
              {props.item.address.locality} - {props.item.address.uf} / BR
            </Style.EventLocation>
          </View>
        </Style.Infos>
      </Style.Card>
    </Style.Events>
  );
};
