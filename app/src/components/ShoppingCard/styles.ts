import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View.attrs({ elevation: 5 })`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`;

export const ContainerData = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerTexts = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export const ProductImage = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.tertiary};
`;

export const ProductName = styled.Text`
  font-size: 15px;
  flex-wrap: wrap;
  font-family: ${theme.fonts.bold};
  color: #000;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  flex-wrap: wrap;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;
