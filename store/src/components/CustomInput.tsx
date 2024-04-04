import React from 'react';
import { View, Text, TextInput, ViewProps } from "react-native";
import styled from 'styled-components/native';

interface CustomInputBaseProps{
  width?: string; 
}

interface CustomInputProps extends CustomInputBaseProps {
  label: string;
  typeInput?: boolean;
}

export const Container = styled.View<ViewProps, TextInput>`
  /* width: ${(props) => props.width ? props.width : 'auto'}; */
  width: 50%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputBase = styled.TextInput`
  width: 100%;
  height: 46px;
  background-color: #F0F0F0;
  border-radius: 5px;
  border-color: #EBEBEB;
  padding: 12px;
  font-size: 15px;
  border-width: 1px;
`;

export const CustomInput: React.FC<CustomInputProps> = ({ label, typeInput, ...rest }) => {
  // Passa explicitamente as propriedades necessárias
  return (
    <Container {...rest}>
      <Text>{label}</Text>
      <InputBase secureTextEntry={typeInput} {...rest} /* Passa todas as propriedades aqui */ />
    </Container>
  );
};
