import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.Text`
  font-size: 25px;
  color: ${theme.colors.primary};
`;

export const CheckButton = styled.TouchableOpacity`
  font-size: 25px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const CheckButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: ${theme.fonts.bold};
`;
