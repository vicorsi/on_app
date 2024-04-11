import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CategoryCardProps } from '../interfaces';
import { COLORS } from '../../constants';
import * as Font from 'expo-font';
import { useState, useEffect } from "react";

export const CategoryCard: React.FC<CategoryCardProps> = ({ text, icon,...rest}) => {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'PoppinsRegular': require('../assets/Fonts/Poppins/Poppins-Regular.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Erro ao carregar fontes:', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.containerCategoryCard}>
        <Pressable style={styles.button} {...rest}>
          <Text>{icon}</Text>
        </Pressable>
        <Text  style={{fontFamily: 'PoppinsRegular', fontSize: 13}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 95,
      height: 80,
      backgroundColor: COLORS.lightGrey2,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.lightGrey3,
      marginBottom: 6
    },
    textButton: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    containerCategoryCard: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  