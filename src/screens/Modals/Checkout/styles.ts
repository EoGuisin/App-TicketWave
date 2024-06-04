import styled from "styled-components/native";
import { windowWidth, windowHeight, android } from "../../../components";

const paddingButton = android ? 5 : 10;

export const Wrapper = styled.View`
  padding: 10px;
  padding-top: 0;
  top: -5px;
  height: ${windowHeight}px;
`;

export const TitleButton = styled.Text`
  font-family: "Montserrat-Regular";
  color: #000;
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
`;

export const SelectedChoice = styled.Text`
  font-family: "Montserrat-ExtraLight";
  color: #000;
  font-size: 18px;
  text-align: center;
  padding: 8px;
`;

export const MultipleChoicedButton = styled.TouchableOpacity`
  width: ${windowWidth / 1.3}px;
  border-radius: 10px;
  margin-top: 5px;
  justify-content: space-between;
  paddingHorizontal: 20px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  background-color: rgba(207, 207, 207, 0.20);
`;

export const AreasContainer = styled.View`
  width: ${windowWidth / 1.3}px;
  border-radius: 10px;
  margin-top: 20px;
  align-self: center;
  background-color: rgba(207, 207, 207, 0.20);
  paddingHorizontal: 5px;
  paddingVertical: 5px;
`;

export const AreaHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AreaSeparate = styled.View`
  border-width: 0.2px;
  border-color: #636363;
  width: 50%;
  align-self: center;
  marginVertical: 20px;
`;

export const AreaTitle = styled.Text`
  color: #F26627;
  font-family: "Montserrat-Regular";
  font-size: 20px;
`;

export const AreaNumberLot = styled.Text`
  color: #000000; 
  font-family: "Montserrat-Light";
  font-size: 15px;
  padding-left: 10px;
`;

export const AreaPrice = styled.Text`
  color: #F26627;
  font-family: "Montserrat-Bold";
  font-size: 20px;
`;

export const AreaMoreLess = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Circle = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: rgba(242, 102, 39, 0.58);
  align-items: center;
  justify-content: center;
`;

export const NumberOfTickets = styled.Text`
  color: rgba(0, 0, 0, 0.65);
  font-family: "Montserrat-Medium";
  font-size: 23px;
  paddingHorizontal: 20px;
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
