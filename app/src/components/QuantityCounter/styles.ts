import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  border-radius: 15px;
  background-color: ${theme.colors.secondary};
`;

export const Counter = styled.Text`
  font-size: 15px;
  color: #000;
  font-family: ${theme.fonts.bold};
  margin-left: 8px;
  margin-right: 8px;
`;
