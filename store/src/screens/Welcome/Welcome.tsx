import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native'
import {COLORS, SIZE} from '../../../constants';
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';

export default function Welcome({navigation}: any) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'PoppinsRegular': require('../../assets/Fonts/Poppins/Poppins-Regular.ttf'),
        'PoppinsBold': require('../../assets/Fonts/Poppins/Poppins-Bold.ttf'),
        'Koulen': require('../../assets/Fonts/Koulen/Koulen-Regular.ttf'),
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
    <View style={styles.screen} >
        <View style={styles.container}>
          <Text style={styles.logoText}>Style On</Text>
          <Text style={styles.introText}>Style On é mais do que um aplicativo de moda, é uma experiência personalizada de estilo que coloca o cliente no centro da moda.</Text>
          <View style={styles.containerButton}>
            <Pressable style={styles.button} onPress={() => {navigation.navigate('Login')}}><Text style={styles.buttonText}>login</Text></Pressable>
            <Pressable style={[styles.button, {backgroundColor: '#000'}]} onPress={() => {navigation.navigate('SignUp')}} ><Text style={styles.buttonText}>criar conta</Text></Pressable>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        width: SIZE.width,
        height: SIZE.height,
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logoText:{
      fontSize: 110,
      fontFamily: 'Koulen',
      color: COLORS.principalOrange,      
    },
    introText: {
      fontSize: 12,
      fontFamily: 'PoppinsRegular',
      textAlign: 'justify',
      color: 'white'
    },
    container:{
      width: '90%',
      height: '90%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: COLORS.black,
    },
    containerButton:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      height: '10%',
      gap: 20,
    },
    button:{
      width: '50%',
      height: '70%',
      backgroundColor: COLORS.principalOrange,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText:{
      color: 'white',
      fontFamily: 'PoppinsBold'
    }
})
