import styled from "styled-components/native";
import { windowWidth, android } from "../../components";

const marginRightInfos = android ? 5 : 10;

export const Events = styled.View`
  width: ${windowWidth}px;
  align-items: flex-start;
  paddingHorizontal: 10px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #CFCFCF30;
  border-radius: 25px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100%;
  border-radius: 25px;
`;

export const Infos = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: ${marginRightInfos}%;
  gap: 60px;
`;

export const InfoHeader = styled.View`
  align-items: center;
  width: ${windowWidth / 1.7}px;
`;

export const EventTitle = styled.Text`
  color: #000;
  font-family: "Montserrat-ExtraBold";
  font-size: 17px;
`;

export const EventDate = styled.Text`
  color: #D6244E;
  font-family: "Montserrat-ExtraBold";
  font-size: 19px;
`;

export const EventLocation = styled.Text`
  color: #D6244E;
  font-family: "Montserrat-Regular";
  font-size: 14px;
`;