import * as Style from "./styles";

//#region React
import React from "react";
import { TouchableOpacity } from "react-native";
//#endregion

//#region Svg
import { SvgCss } from "react-native-svg";
import { closeModal } from "../../assets/svg";
//#endregion

interface Props {
  closeModal: () => void;
  title: string | undefined;
}

export const HeaderModal = (props: Props) => {
  return (
    <Style.Header>
      <TouchableOpacity activeOpacity={1} onPress={props.closeModal}>
        <SvgCss xml={closeModal} />
      </TouchableOpacity>
      <Style.Title>{props.title}</Style.Title>
      <Style.View />
    </Style.Header>
  );
};
