import styled from "styled-components/native";
import { windowWidth, windowHeight, android } from "../../../components";

const paddingButton = android ? 5 : 10;

export const Wrapper = styled.View`
  padding: 10px;
  padding-top: 0;
  top: -5px;
  height: ${windowHeight}px;
`;

export const DateTitle = styled.Text`
  color: #d6244e;
  text-align: center;
  text-shadow: 0px 4px 3.4000000953674316px rgba(0, 0, 0, 0.13);
  font-family: "Montserrat-Medium";
  font-size: 20px;
`;

export const InformationContainer = styled.View`
  margin-top: 20px;
`;

export const InformationTitle = styled.Text`
  font-family: "Montserrat-Medium";
  color: #000;
  font-size: 22px;
  margin-top: 25px;
`;

export const InformationDescription = styled.Text`
  font-family: "Montserrat-Light";
  color: #000;
  padding-left: 10px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #d6244e;
  width: ${windowWidth / 1.3}px;
  align-self: center;
  border-radius: 20px;
  position: absolute;
  bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Montserrat-Regular";
  font-size: 25px;
  paddingVertical: ${paddingButton}px;
`;
