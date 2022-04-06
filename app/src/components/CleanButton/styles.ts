import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 10px;
  color: #fff;
  font-family: ${theme.fonts.bold};
`;
