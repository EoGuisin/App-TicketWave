import styled from "styled-components/native";
import { windowWidth, windowHeight, android } from "../../components";

const marginTopWrapper = android ? 30 : 50;

export const Container = styled.View`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  background-color: #fff;
`;

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  width: ${windowWidth}px;
  height: ${windowHeight / 1.2}px;
  margin-top: ${marginTopWrapper}px;
  border-radius: 100px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  width: ${windowWidth}px;
`;

export const NameUser = styled.Text`
  color: #D6244E;
  font-family: "Montserrat-Black";
  font-size: 16px;
  margin-top: 5px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-family: "Montserrat-Bold";
  font-size: 25px;
`;