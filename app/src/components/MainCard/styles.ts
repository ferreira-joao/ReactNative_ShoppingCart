import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View.attrs({ elevation: 5 })`
  flex: 0.5;
  margin: 5px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
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

export const ProductQuantity = styled.Text`
  font-size: 15px;
  flex-wrap: wrap;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.text};
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  flex-wrap: wrap;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;

export const AddButton = styled.TouchableOpacity`
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
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
