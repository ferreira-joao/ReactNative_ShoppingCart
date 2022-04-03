import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  width: 50%;
  border-radius: 10px;
  background-color: #fff;
`;

export const DataContainer = styled.View`
  padding: 10px;
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

export const AddButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
`;

export const AddButtonText = styled.Text`
  width: 100%;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-family: ${theme.fonts.bold};
`;
