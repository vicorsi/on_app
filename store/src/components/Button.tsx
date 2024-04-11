import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { ButtonProps } from '../interfaces';

export const Button: React.FC<ButtonProps> = ({ text, ...rest}) => {
  return (
    <Pressable style={styles.button} {...rest}>
        <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 312,
      height: 58,
      // padding: 17,
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 8,
    },
    textButton: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
  });
  