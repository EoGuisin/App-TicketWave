import styled from "styled-components/native";
import { windowWidth } from "../../components";

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #D6244E;
  font-family: "Montserrat-ExtraBold";
  font-size: 19px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  width: ${windowWidth / 1.7}px;
  text-align: center;
`;

export const View = styled.View`
  width: 34px;
`;