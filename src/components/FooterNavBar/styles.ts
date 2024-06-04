import styled from "styled-components/native";
import { android } from "..";

export const BottomNavBarTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: "Montserrat-Black";
  align-self: center;
  text-align: center;
`;

export const BottomNavBarButton = styled.TouchableOpacity`
  width: 70px;
  align-items: center;
  border-radius: 20px;
  height: 50px;
  justify-content: center;
`;

export const SVGsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const elipse1 = {
  width: 170,
  height: 170,
  borderRadius: 80,
  backgroundColor: "#FFF6B7",
  borderWidth: 1,
  borderColor: "#FFF4A4",
  transform: [{ scaleX: 4 }],
  top: android ? 320 : 310,
};

export const elipse2 = {
  width: 170,
  height: 170,
  borderRadius: 80,
  transform: [{ scaleX: 4 }],
  top: android ? 200 : 190,
};