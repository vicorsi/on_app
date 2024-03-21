import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

interface CategoryCardProps extends PressableProps{
    icon: React.ReactNode
    text: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ text, icon,...rest}) => {
  return (
    <View >
        <Pressable style={styles.button} {...rest}>
            {icon}
        </Pressable>
        <Text>{text}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    button: {
      width: 312,
      height: 55,
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
  