import { View, StyleSheet, Text } from "react-native"
import { COLORS, SIZE } from "../../../constants"
import Header from "../../components/Header"
import { StatusBar } from "react-native"
import { OrderTypeCard } from "../../components/OrderTypeCard"
import { useState, useEffect } from "react"
import * as Font from 'expo-font';

export const Homepage = () => {

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
    <View style={styles.screen}>
        <StatusBar backgroundColor={COLORS.black} animated={true}/>
        <Header/>
        <View style={styles.principalContainer}>
            <View style={{width: '100%', alignItems: 'center', padding: 16}}>
                <Text style={styles.textHomepage}>Minhas encomendas</Text>
            </View>

            <OrderTypeCard text="Pendente" />
            <OrderTypeCard text="A caminho" />
            <OrderTypeCard text="Entregue" />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    screen: {
        width: SIZE.width,
        height: SIZE.height,
        backgroundColor: COLORS.white,
        display: 'flex',
        alignItems: 'center',
      },
      principalContainer:{
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        gap: 35
    },
    textHomepage: {
        fontSize: 15,
        fontFamily: 'PoppinsBold',
    }
})