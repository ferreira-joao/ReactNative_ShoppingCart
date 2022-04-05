import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #000;
`;

export const CloseButton = styled.TouchableOpacity``;
