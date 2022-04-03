import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const TitleHeader = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  color: #000;
  font-family: ${theme.fonts.bold};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
`;

export const List = styled.View`
  width: 100%;
  margin-top: 10px;
`;
