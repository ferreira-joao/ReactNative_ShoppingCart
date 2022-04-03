import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  align-items: center;
`;

export const ProductImage = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 75px;
  background-color: ${theme.colors.tertiary};
`;

export const ProductName = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: #000;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;
